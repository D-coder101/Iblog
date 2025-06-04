"use client";
// import { useGlobalStore } from "@/store/zustand-store";

import * as yup from "yup";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import AuthCard from "../auth/auth-card";
import CustomInput from "../ui/CustomInput";
import { registerAction } from "@/app/_actions/authActions";
import { SubmitButton } from "../submit-button";
import { useActionState, useCallback, useEffect, useState } from "react";
import { IActionState } from "@/utils/types";
import { signupSchema } from "@/app/schemas/signup-schema";

const initialState: IActionState = {
  message: undefined,
  errors: undefined,
  data: undefined,
};

export default function SignupForm() {
  const router = useRouter();
  const [state, formAction] = useActionState(registerAction, initialState);
  // const updateUser = useGlobalStore((state) => state.updateUser);

  // form values
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  // form errors
  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  // validate all inputs using Yup schema
  const validateAllInputs = useCallback(async () => {
    try {
      await signupSchema.validate(formValues, { abortEarly: false });
      setFormErrors({ username: "", email: "", password: "" }); // Clear all errors
      return true;
    } catch (err: unknown) {
      const errors: { username: string; email: string; password: string } = {
        username: "",
        email: "",
        password: "",
      };
      if (err instanceof yup.ValidationError && err.inner) {
        err.inner.forEach((error: yup.ValidationError) => {
          if (error.path) {
            // Ensure error.path is a key of errors
            if (error.path in errors) {
              errors[error.path as keyof typeof errors] = error.message;
            }
          }
        });
      }
      setFormErrors(errors);
      return false;
    }
  }, [formValues]);

  // handle input change and validate on blur or real-time
  const handleInputChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormValues((prev) => ({ ...prev, [name]: value }));

      // Validate single field immediately
      try {
        await (yup.reach(signupSchema, name) as yup.AnySchema).validate(value);
        setFormErrors((prev) => ({ ...prev, [name]: "" })); // Clear error for this field
      } catch (err: unknown) {
        if (err instanceof yup.ValidationError) {
          setFormErrors((prev) => ({ ...prev, [name]: err.message })); // Set error for this field
        }
      }
    },
    []
  );

  // effect to handle server action results
  useEffect(() => {
    // Clear client-side errors
    setFormErrors({ username: "", email: "", password: "" });

    if (state.message) {
      if (state.message.toLowerCase().includes("success")) {
        toast.success(state.message);
        router.push("/login");
        // Clear form values on successful submission
        setFormValues({ username: "", email: "", password: "" });
      } else {
        toast.error(state.message);
      }
    }
  }, [state, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await validateAllInputs();
    if (!isValid) {
      e.preventDefault(); // Prevent server action if client-side validation fails
      toast.error("Please fix the highlighted errors before submitting.");
    }
  };

  const cannotSubmit =
    !formValues.username.trim() ||
    !formValues.email.trim() ||
    !formValues.password.trim() ||
    Object.values(formErrors).some((errorMsg) => errorMsg !== "");

  return (
    <AuthCard
      cardTitle="Create an account"
      cardText="Stay tuned with the latest trend all over the world..."
      footerText="Already have an account?"
      footerHref="/login"
      footerLabel="Login"
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
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          // defaultValue={email}
          value={formValues.email}
          onChange={handleInputChange}
          error={formErrors.email}
          autoComplete="email"
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

        <SubmitButton text="Sign Up" cannotSubmit={cannotSubmit} />
      </form>
    </AuthCard>
  );
}
