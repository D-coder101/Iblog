"use client";

import clsx from "clsx";
import { InputHTMLAttributes, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  error?: string;
  variant?: "sm" | "md" | "lg" | "xs";
  name: string;
}

const sizeClasses = {
  xs: "px-2 py-1 text-xs",
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

export default function CustomInput({
  label,
  name,
  error,
  required,
  fullWidth,
  // defaultValue,
  onChange,
  value,
  autoComplete,
  type = "text",
  variant = "md",
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={name}
          className={`text-left block text-slate-600  ${
            required &&
            error &&
            "after:ml-0.5 after:text-red-500 after:content-['*']"
          }`}
        >
          {label}
        </label>
      )}

      {/*input */}
      <div className="flex relative">
        <input
          {...props}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          // defaultValue={defaultValue}
          onChange={onChange}
          value={value}
          autoComplete={autoComplete}
          name={name}
          className={clsx(
            props.className,
            sizeClasses[variant],
            "ring-1 ring-gray-300 grow text-gray-600 rounded-md outline-none ",
            error ? "ring-red-500 focus:ring-red-500 " : "focus:ring-gray-600",
            {
              "w-full": fullWidth,
            }
          )}
        />
        {/*icon */}
        {name === "password" && (
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute h-full right-0 grid place-items-center w-8 text-gray-500 cursor-pointer"
          >
            {showPassword ? (
              <AiFillEyeInvisible size={20} />
            ) : (
              <AiFillEye size={20} />
            )}
          </span>
        )}
      </div>

      {/* error */}
      <div className="h-4 text-right">
        {error && <p className=" text-xs text-right text-red-500">{error}</p>}
      </div>
    </div>
  );
}

// import { useField } from "formik";
// import { CustomInputProps } from "@/utils/types";

// export default function CustomInput({
//   textColor = "text-white",
//   border,
//   padding,
//   label,
//   type = "text",
//   labelClass,
//   // autoComplete,
//   disabled,
//   variant,
//   ...props
// }: CustomInputProps) {
//   const [field, meta] = useField(props.name);
//   return (
//     <div className="flex flex-col">
//       {label && (
//         <label
//           htmlFor={props.name}
//           className={`text-left text-sm text-slate-600 font-medium ${textColor} ${labelClass}`}
//         >
//           {label}
//         </label>
//       )}
//       <input
//         {...field}
//         {...props}
//         // autoComplete={autoComplete}
//         disabled={disabled}
//         type={type}
//         className={`border ${disabled && "cursor-not-allowed"}  ${textColor} ${
//           variant === "plain"
//             ? "bg-gray-100 focus:bg-transparent"
//             : "bg-transparent"
//         }  placeholder:text-sm placeholder:font-medium w-full focus:ring-0 rounded-md outline-0 focus:border-black ${
//           padding ? padding : "py-2 px-3"
//         }
//        ${
//          meta.error && meta.touched
//            ? "border-red-500"
//            : border
//            ? border
//            : "border-black"
//        }
//           }`}
//       />
//       <div className="h-4 text-right">
//         {meta.error && meta.touched && (
//           <p className=" text-xs text-right text-red-500">{meta.error}</p>
//         )}
//       </div>
//     </div>
//   );
// }
