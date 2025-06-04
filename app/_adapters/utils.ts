import { storeAccessToken } from "@/utils/helpers";
import {
  auth_refresh_token_action,
  auth_update_refresh_token,
  logoutAction,
} from "../_actions/authActions";
import { cookies } from "next/headers";

let refreshPromise: Promise<string | undefined> | null = null;

export const access_token_retrieve = async (): Promise<string | null> => {
  const cookieStore = await cookies();

  let token = cookieStore.get("access")?.value || null;

  if (!token) {
    if (!refreshPromise) {
      refreshPromise = auth_refresh_token_action()
        .then((newToken) => {
          console.log(newToken);
          if (newToken) {
            sessionStorage.setItem("access", newToken);
            // storeAccessToken(newToken);
          }
          return newToken;
        })
        // .catch(async () => {
        //   console.log("::> Logged Out");
        //   await logoutAction();
        //   return null;
        // })
        .finally(() => {
          refreshPromise = null;
        });
    }

    token = (await refreshPromise) || null;
  }

  return token;
};

export const auth_logout = async () => {
  await logoutAction();
};

export const auth_login = async (access: string, refresh: string) => {
  // set access token
  sessionStorage.setItem("access", access);

  // set refresh token
  await auth_update_refresh_token(refresh);
};
