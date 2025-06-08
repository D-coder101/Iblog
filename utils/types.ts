export interface BackendAPIResponse {
  message: string;
  success: boolean;
}

export interface AuthRefreshTokenPayload extends BackendAPIResponse {
  data: {
    access_token: string;
    refresh_token: string;
  };
}

export interface AuthLoginPayload extends BackendAPIResponse {
  data: {
    access_token: string;
    refresh_token: string;
  };
}

export interface IActionState {
  data?: Record<string, any>;
  // error?: string;
  errors?: Record<string, any>;
  message?: string;
}

export interface CustomInputProps {
  label?: string;
  autoComplete?: "off" | "on";
  disabled?: boolean;
  name: string;
  type?: string;
  textColor?: string;
  padding?: string;
  border?: string;
  placeholder?: string;
  labelClass?: string;
  variant?: "plain" | "outlined";
}

export interface SignupFormValues {
  username: string;
  email: string;
  password: string;
}

export type LoginFormValues = Pick<SignupFormValues, "username" | "password">;

export interface EditProfileFormValues {
  fullname: string;
  // lastname: string;
  username: string;
  email: string;
  phone: string;
  bio: string;
}

// {
//   "id": 6,
//   "username": "DCODER",
//   "email": "bellofavour533@gmail.com",
//   "role": "author",
//   "profile_url": null
// }

export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  profile_url?: string | null;
}

export type IUser = {
  user: User | null;
};
