"use client";

import { Form, Formik, FormikHelpers } from "formik";
import AuthCard from "./auth-card";
import CustomInput from "../ui/CustomInput";
import { BeatLoader } from "react-spinners";
import { loginSchema } from "@/app/schemas/login-schema";
import { useLogin } from "@/app/_hooks/useLogin";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { LoginFormValues } from "@/utils/types";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const { login, isPending } = useLogin();
  const router = useRouter();
  const redirectTo = searchParams.get("redirect") || "/";
  // const updateFullName = useGlobalStore((state) => state.updateFullName);

  const onSubmit = async (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>
  ) => {
    login(values, {
      onSuccess: () => {
        router.push(redirectTo);
        actions.resetForm();
        // updateFullName(values.username);
      },
    });
  };
  // Ogie was here. No commot am o 😈
  return (
    <AuthCard
      cardTitle="Welcome Back"
      cardText="Please enter log in details below"
      footerText="Don't have an account?"
      footerHref="/signup"
      footerLabel="Sign Up"
      showSocials
    >
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {/* {({ isSubmitting }) => ( */}
        <Form>
          <CustomInput
            textColor="text-black"
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
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
              "Log in"
            )}
          </button>
        </Form>
        {/* )} */}
      </Formik>
    </AuthCard>
  );
}
