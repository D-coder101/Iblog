"use client";

import AuthCard from "../auth/auth-card";
import CustomInput from "../ui/CustomInput";
import { useActionState, useEffect, useState } from "react";

import { IActionState } from "@/utils/types";
import { useRouter, useSearchParams } from "next/navigation";
import { loginAction } from "@/app/_actions/authActions";
import toast from "react-hot-toast";
import { SubmitButton } from "../submit-button";
import { storeAccessToken } from "@/utils/helpers";

const initialState: IActionState = {
  message: undefined,
  errors: undefined,
  data: undefined,
};

export default function LoginForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [state, formAction] = useActionState(loginAction, initialState);
  const redirectTo = searchParams.get("redirect") || "/";
  // const updateFullName = useGlobalStore((state) => state.updateFullName);

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  //form errors
  const [formErrors, setFormErrors] = useState({
    username: "",
    password: "",
  });

  //validate inputs
  const validateInputs = () => {
    const errors = {
      username: "",
      // email: "",
      password: "",
    };
    if (!formValues.username.trim() || formValues.username.length < 3) {
      errors.username = "Username must be at least 3 characters";
    }

    if (formValues.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    setFormErrors(errors);
    return Object.values(errors).every((e) => e === "");
  };

  //handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));

    // validate on input
    setFormErrors((prev) => ({
      ...prev,
      [name]:
        name === "username" && (value.trim().length === 0 || value.length < 3)
          ? "Username must be at least 3 characters"
          : name === "password" && value.length < 6
          ? "Password must be at least 6 characters"
          : "", // Clear error if input becomes valid
    }));
  };

  // Effect to handle server action results
  useEffect(() => {
    // Clear client-side errors
    setFormErrors({ username: "", password: "" });

    if (state?.message) {
      if (state.message.toLowerCase().includes("success")) {
        toast.success(state.message);
        storeAccessToken(state.data?.token);
        router.push(redirectTo);
        // Clear form values on successful submission
        setFormValues({ username: "", password: "" });
      } else {
        toast.error(state.message);
      }
    }
  }, [state, router, redirectTo]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!validateInputs()) {
      e.preventDefault(); // Stop server action
    }
  };

  const cannotSubmit =
    !formValues.username.trim() ||
    !formValues.password.trim() ||
    Object.values(formErrors).some((errorMsg) => errorMsg !== "");

  return (
    <AuthCard
      cardTitle="Welcome Back"
      cardText="Please enter log in details below"
      footerText="Don't have an account?"
      footerHref="/signup"
      footerLabel="Sign Up"
      showSocials
    >
      <form action={formAction} onSubmit={handleSubmit}>
        <CustomInput
          label="Username"
          name="username"
          type="text"
          placeholder="Enter your username"
          // defaultValue={username}
          value={formValues.username}
          onChange={handleInputChange}
          error={formErrors.username}
          autoComplete="username"
          // disabled={isPending}
        />
        <CustomInput
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          // defaultValue={password}
          value={formValues.password}
          onChange={handleInputChange}
          error={formErrors.password}
          autoComplete="password"
        />
        <SubmitButton text="Log in" cannotSubmit={cannotSubmit} />
      </form>
    </AuthCard>
  );
}
