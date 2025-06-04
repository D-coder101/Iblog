import { httpClient } from "@/app/_adapters/axios";
import { API_PATHS } from "@/utils/enums";
// import { User } from "@/utils/types";
import { cookies } from "next/headers";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";

export async function getSession() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access")?.value;
  if (!accessToken) return;

  try {
    const res = await httpClient.get(API_PATHS.GET_USER);
    return res.data;
  } catch (err) {
    console.log(err);
    toast.error("Failed to get session!");
  }
}

// export async function getUserById(userId: string) {
//   try {
//   } catch {}
// }
