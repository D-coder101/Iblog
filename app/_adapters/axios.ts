import axios, { InternalAxiosRequestConfig } from "axios";

import { access_token_retrieve } from "./utils";
import { logoutAction } from "../_actions/authActions";

const PUBLIC_ROUTES = [
  "auth/login",
  "auth/logout",
  "auth/register",
  "auth/refresh",
];
// || "http://localhost:3000/api/vi/";

const apiBaseURL = process.env.NEXT_PUBLIC_BASE_BACKEND_API;

// const isClient = typeof window !== "undefined";

export const httpClient = axios.create({
  baseURL: apiBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const authInterceptor = async (config: InternalAxiosRequestConfig) => {
  // check if public route
  const publicRoute = PUBLIC_ROUTES.includes(config.url || "");

  // attach token if not public route
  if (!publicRoute) {
    const access_token = await access_token_retrieve();

    //if no access_token logout
    if (!access_token) {
      await logoutAction();
      console.log("::> Logged out user");
    }

    //else proceed with request
    if (access_token) {
      config.headers["Authorization"] = `Bearer ${access_token}`;
    }
  }

  return config;
};

httpClient.interceptors.request.use(authInterceptor);

// Request interceptor
// httpClient.interceptors.request.use(
//   (config) => {
//     const token = getCookie("access");
//     // const token = sessionStorage.getItem("access");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Response interceptor
// httpClient.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response) {
//       // Handle Unauthorized Error (Token Expired) and check if the request hasn't already been retried to avoid over looping
//       if (error.response.status === 401 && !originalRequest._retry) {
//         originalRequest._retry = true; // Mark request as retried to avoid loops

//         try {
//           // get refreshToken stored in cookie
//           const refreshToken = getCookie("refresh");

//           if (!refreshToken) {
//             // No refresh token, redirect to login
//             // sessionStorage.removeItem("accessToken");
//             removeCookie("access");
//             console.log("removed access token");
//             window.location.href = "/login";
//             // window.location.replace("/login");
//             return Promise.reject(error);
//           }

//           //if refreshToken fetch new accessToken
//           const refreshResponse = await httpClient.post(
//             API_PATHS.REFRESH_PATH,
//             {},
//             {
//               headers: {
//                 Authorization: `Bearer ${refreshToken}`,
//               },
//             }
//           );
//           console.log(refreshResponse);
//           const { access_token } = refreshResponse.data;
//           // sessionStorage.setItem("accessToken", access_token);
//           setCookie("accessToken", access_token, 5);
//           originalRequest.headers["Authorization"] = `Bearer ${access_token}`;

//           // Retry the original request
//           return httpClient(originalRequest);
//         } catch (refreshError: unknown) {
//           // Handle 403 response from refresh token endpoint
//           if (
//             axios.isAxiosError(refreshError) &&
//             refreshError.response?.status === 403
//           ) {
//             clearCookies();
//             // sessionStorage.removeItem("accessToken");
//             // removeCookie("accessToken");
//             window.location.href = "/login";
//             // window.location.replace("/login");
//           }

//           //throw other errors to stop further processing
//           return Promise.reject(refreshError);
//         }
//       }
//     }

//     return Promise.reject(error);
//   }
// );
