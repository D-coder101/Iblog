"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import { useGlobalStore } from "@/store/zustand-store";

import { Form, Formik, FormikHelpers } from "formik";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BeatLoader } from "react-spinners";

import { signupSchema } from "@/app/schemas/signup-schema";
import { useSignup } from "@/app/_hooks/useSignup";
import { SignupFormValues } from "@/utils/types";
import AuthCard from "./auth-card";
import CustomInput from "../ui/CustomInput";

export default function SignupForm() {
  const { signup, isPending } = useSignup();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  // const updateUser = useGlobalStore((state) => state.updateUser);

  const onSubmit = async (
    values: SignupFormValues,
    actions: FormikHelpers<SignupFormValues>
  ) => {
    signup(values, {
      onSuccess: () => {
        // updateUser(data);
        actions.resetForm();
        router.push("/login");
      },
    });
  };

  return (
    <AuthCard
      cardTitle="Create an account"
      cardText="Stay tuned with the latest trend all over the world..."
      footerText="Already have an account?"
      footerHref="/login"
      footerLabel="Login"
      showSocials
    >
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={signupSchema}
        onSubmit={onSubmit}
      >
        {/* {({ isSubmitting }) => ( */}
        <Form>
          <CustomInput
            textColor="text-black"
            label="Fullname"
            name="username"
            type="text"
            placeholder="Enter your fullname"
            disabled={isPending}
          />
          <CustomInput
            textColor="text-black"
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            disabled={isPending}
          />
          <div className="relative">
            <CustomInput
              textColor="text-black"
              label="Password"
              name="password"
              padding="py-2 pl-3 pr-10"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              disabled={isPending}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute py-2.5 w-8 grid place-items-center right-0 top-1/2 -translate-y-1/2 text-gray-500 focus:outline-none"
            >
              {showPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </button>
          </div>
          <button
            type="submit"
            className={`flex mt-1.5 ${
              isPending ? "bg-black/50" : "bg-black"
            }  rounded-md w-full text-white disabled:cursor-not-allowed items-center justify-center py-2.5 gap-x-2`}
            disabled={isPending}
          >
            {isPending ? (
              <span>
                <BeatLoader color={"#fff"} size={12} loading={true} />
              </span>
            ) : (
              "Sign up"
            )}
          </button>
        </Form>
        {/* )} */}
      </Formik>
    </AuthCard>
  );
}
