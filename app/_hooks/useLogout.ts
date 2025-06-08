// "use client";

// import { useMutation } from "@tanstack/react-query";
// // import { logout as logoutApi } from "@/app/_services/apiAuth";
// import { logoutAction as logoutApi } from "../_actions/authActions";
// import toast from "react-hot-toast";
// // import { getErrorMessage } from "@/utils/helpers";

// export function useLogout() {
//   const { mutate: logout, isPending } = useMutation({
//     mutationFn: logoutApi,
//     onSuccess: () => {
//       toast.success("Logged out successfully... ");
//       // sessionStorage.removeItem("accessToken");
//       // clearCookies();
//     },
//     onError: (err) => {
//       // const message = getErrorMessage(err);
//       toast.error(err?.message);
//     },
//   });

//   return { logout, isPending };
// }
