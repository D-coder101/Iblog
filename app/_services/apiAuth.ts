// "use server";
import { axiosInstance } from "@/app/_adapters/axios";
import { API_PATHS } from "@/utils/enums";
import { getCookie } from "@/utils/helpers";
import { LoginFormValues, SignupFormValues } from "@/utils/types";

export async function signup(data: SignupFormValues) {
  // console.log(data);
  const payload = {
    username: data.username,
    email: data.email,
    password: data.password,
    role: "author",
  };

  try {
    const res = await axiosInstance.post(API_PATHS.REGISTRATION_PATH, payload);
    return res.data;
  } catch (err) {
    throw err; //preserve axios err as it is and send to hook
  }
}

export async function login(data: LoginFormValues) {
  const payload = {
    identifier: data.username,
    password: data.password,
  };

  try {
    const res = await axiosInstance.post(API_PATHS.LOGIN_PATH, payload);
    return res.data;
  } catch (err) {
    throw err;
    // throw new Error(error.detail?.[0]?.msg);
  }
}

export async function logout() {
  const refreshToken = getCookie("refreshToken");

  if (!refreshToken) return;

  try {
    const res = await axiosInstance.post(
      API_PATHS.LOGOUT_PATH,
      {},
      {
        headers: {
          "refresh-token": refreshToken,
        },
      }
    );
    console.log("::> Logged Out");
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function deleteUser() {}
export async function getAllUsers() {}
