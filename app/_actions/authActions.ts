"use server";

import { httpClient } from "@/app/_adapters/axios";
import { API_PATHS } from "@/utils/enums";
import { getErrorMessage } from "@/utils/helpers";
import { IActionState } from "@/utils/types";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { BASE_COOKIE_OPTIONS, REFRESH_TOKEN_LIFETIME } from "../_config";

export async function registerAction(
  _: IActionState,
  formData: FormData
): Promise<IActionState> {
  const rawFormData = {
    username: formData.get("username") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  try {
    await httpClient.post(API_PATHS.REGISTRATION_PATH, rawFormData);

    return {
      message: "Signup Success",
    };
  } catch (err) {
    return {
      message: getErrorMessage(err),
    };
  }
}

export async function loginAction(
  _: IActionState,
  formData: FormData
): Promise<IActionState> {
  const cookieStore = await cookies();
  const rawFormData = {
    identifier: formData.get("username") as string,
    password: formData.get("password") as string,
  };

  try {
    const res = await httpClient.post(API_PATHS.LOGIN_PATH, rawFormData);
    const { access_token, refresh_token } = res.data;

    cookieStore.set({
      ...BASE_COOKIE_OPTIONS,
      value: access_token,
      httpOnly: false,
    });

    cookieStore.set({
      ...BASE_COOKIE_OPTIONS,
      name: "refresh",
      value: refresh_token,
      maxAge: REFRESH_TOKEN_LIFETIME,
    });

    return {
      message: "Logged in successfully...",
      data: {
        access: access_token,
      },
    };
  } catch (err) {
    return {
      message: getErrorMessage(err),
    };
  }
}

export async function logoutAction() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refresh")?.value;
  console.log(refreshToken);

  if (!refreshToken) return;

  cookieStore.delete("access");
  cookieStore.set({
    ...BASE_COOKIE_OPTIONS,
    name: "refresh",
    value: "",
    maxAge: 0,
  });

  revalidatePath("/", "layout");
  redirect("/login");

  // try {
  //   await httpClient.post(
  //     API_PATHS.LOGOUT_PATH,
  //     {},
  //     {
  //       headers: {
  //         Authorization: `Bearer ${refreshToken}`,
  //       },
  //     }
  //   );

  //   console.log("success logout");
  //   cookieStore.delete("access");
  //   // cookieStore.delete("refresh");
  //   cookieStore.set({
  //     ...BASE_COOKIE_OPTIONS,
  //     name: "refresh",
  //     value: "",
  //     maxAge: 0,
  //   });

  //   console.log("::> Logged out successfully");

  //   revalidatePath("/", "layout");
  //   redirect("/login");
  // } catch (err) {
  //   console.log(err);
  //   // return {
  //   //   message: "Failed to log out!",
  //   // };
  // }
}

export async function auth_refresh_token_action() {
  const _cookies = await cookies();
  const refreshToken = _cookies.get("refresh");

  if (refreshToken?.value) {
    const refreshTokenValue = refreshToken.value;

    try {
      const res = await httpClient.post(
        API_PATHS.REFRESH_PATH,
        {},
        {
          headers: {
            Authorization: `Bearer ${refreshTokenValue}`,
          },
        }
      );
      _cookies.set({
        ...BASE_COOKIE_OPTIONS,
        name: "refresh",
        value: res.data.refresh_token,
        maxAge: REFRESH_TOKEN_LIFETIME,
      });

      _cookies.set({
        ...BASE_COOKIE_OPTIONS,
        value: res.data.access_token,
        httpOnly: false,
      });

      return res.data.access_token;
    } catch (err) {
      console.log(err);
    }
  }
  return null;
}

// export async function auth_refresh_token_action() {
//   const _cookies = await cookies();
//   const token = _cookies.get("refresh");
//   return token?.value;
// }

export async function auth_update_refresh_token(refresh: string) {
  const _cookies = await cookies();
  _cookies.set({
    ...BASE_COOKIE_OPTIONS,
    name: "refresh",
    value: refresh,
    maxAge: REFRESH_TOKEN_LIFETIME,
  });
}
