import * as yup from "yup";

export const profileSchema = yup.object().shape({
  fullname: yup.string().required("Full name is required"),
  username: yup.string().required("Username is required"),
  // firstname: yup.string().required("First name is required"),
  // lastname: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^\+?\d{10,15}$/, "Phone number is not valid")
    .required("Phone number is required")
    .required("Phone number is required"),
  bio: yup.string().max(300, "Bio must be at most 300 characters"),
});
