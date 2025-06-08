// "use client";
import { isAxiosError } from "axios";
import Cookies from "js-cookie";
// import {JwtPayload, jwtDecode} from "jwt-decode"

export const getErrorMessage = (err: unknown): string => {
  if (isAxiosError(err)) {
    const res = err.response?.data;

    if (Array.isArray(res) && res.length > 0 && res[0]?.msg) {
      return res[0].msg; // Extract the 'msg' from the first error object in the array
    }

    return (
      res?.message ||
      res?.detail ||
      // res?.errors?.[0]?.msg ||
      "Something went wrong"
    );
  }

  if (err instanceof Error) {
    return err.message;
  }

  return "An unexpected error occurred.";
};

export const truncateString = (str: string, maxLength: number) => {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
};

export async function setCookie(key: string, value: string, expire?: number) {
  const expiry = expire ? new Date(Date.now() + expire * 60 * 1000) : 7;

  Cookies.set(key, value, { expires: expiry });
}

export function removeCookie(key: string): void {
  Cookies.remove(key);
}

export function getCookie(key: string) {
  return Cookies.get(key) as string;
}

export function clearCookies() {
  Object.keys(Cookies.get()).forEach((cookie) => Cookies.remove(cookie));
}

export const jwtExpiry = (): string => {
  if (!getCookie("accessToken")) {
    return "null";
  }
  const jwtPayload = JSON.parse(
    window.atob(getCookie("accessToken").split(".")[1])
  );
  if (jwtPayload.exp * 1000 <= Date.now()) {
    return "EXPIRED";
  }
  return "NOT_EXPIRED";
};

export const storeAccessToken = (token: string) => {
  if (!token) return;
  sessionStorage.setItem("access", token);
};

// export function clearSomeCookies(){
//   Object.keys(Cookies.get()).forEach(cookie => {
//       if (cookie !== 'id' && cookie !== 'userId' && cookie !== 'draftId' && cookie !== 'avatar' && cookie !== 'firstName' && cookie !== 'lastName' && cookie !== 'email'
//           && cookie !== 'phone'
//           && cookie !== 'token') {
//           Cookies.remove(cookie);
//       }
//   });
// }

/////////////////////////////////////////////////////
/*
export const tokenExpired = (token: string) => {
const decoded = jwtDecode(token.trim())
const currentTime  = Math.floor(Date.now() / 1000)
const tenMinutesInSeconds = 10 * 60
const hasExpired = !decoded.exp || decoded.exp < currenttime + tenMinutesInSeconds
return hasExpired
}

export const isValidToken = (token: string, tokenType?: string) => {
const decoded = jwtDecode(token.trim()} as JwtPayload & {token_type: string}

cosnt isExpired = tokenExpired(token) 
const isValidType = tokenType ? decoded.token_type === tokenType tokenType: true
return !isExpired && isValidType

}
*/
