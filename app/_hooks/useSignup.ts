// "use client";

// import { useMutation } from "@tanstack/react-query";
// import { signup as signupApi } from "@/app/_services/apiAuth";
// import toast from "react-hot-toast";
// import { getErrorMessage } from "@/utils/helpers";

// export function useSignup() {
//   const { mutate: signup, isPending } = useMutation({
//     mutationFn: signupApi,
//     onSuccess: () => {
//       toast.success("Account successfully created! ");
//     },
//     onError: (err) => {
//       const message = getErrorMessage(err);
//       toast.error(message);
//     },
//   });

//   return { signup, isPending };
// }
