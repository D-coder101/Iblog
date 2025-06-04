"use client";

import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "@/app/_services/apiAuth";
import toast from "react-hot-toast";
import { getErrorMessage, setCookie } from "@/utils/helpers";
// import { cookies } from "next/headers";
// import { BASE_COOKIE_OPTIONS, REFRESH_TOKEN_LIFETIME } from "@/utils/enums";

export function useLogin() {
  const { mutate: login, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      const { access_token, refresh_token } = data;
      setCookie("refreshToken", refresh_token);
      setCookie("accessToken", access_token, 5);

      // sessionStorage.setItem("accessToken", access_token);
      // cookies().set({
      //   ...BASE_COOKIE_OPTIONS,
      //   value: access_token,
      //   httpOnly: false,
      // });

      // cookies().set({
      //   ...BASE_COOKIE_OPTIONS,
      //   name: "refresh",
      //   value: refresh_token,
      //   maxAge: REFRESH_TOKEN_LIFETIME,
      // });

      toast.success("Logged in successfully... ");
    },
    onError: (err) => {
      const message = getErrorMessage(err);
      toast.error(message);
    },
  });

  return { login, isPending };
}
