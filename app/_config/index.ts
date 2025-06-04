//default access_token_lifetime = 5min

import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

//default refresh_token_lifetime = 7days
export const ACCESS_TOKEN_LIFETIME = 5 * 60;
export const REFRESH_TOKEN_LIFETIME = 7 * 24 * 60 * 60;
export const BASE_COOKIE_OPTIONS: ResponseCookie = {
  name: "access",
  value: "",
  httpOnly: true,
  sameSite: "strict",
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: ACCESS_TOKEN_LIFETIME,
};

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_BACKEND_API;
