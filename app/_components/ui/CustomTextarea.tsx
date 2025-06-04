// "use client";

import { useField } from "formik";
import { CustomInputProps } from "@/utils/types";

export default function CustomTextarea({
  textColor = "text-white",
  border,
  padding,
  label,
  labelClass,
  // autoComplete,
  disabled,
  variant,
  placeholder,
  ...props
}: CustomInputProps) {
  const [field, meta] = useField(props.name);
  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={props.name}
          className={`text-left text-sm text-slate-600 font-medium ${textColor} ${labelClass}`}
        >
          {label}
        </label>
      )}
      <textarea
        {...field}
        {...props}
        maxLength={301}
        // autoComplete={autoComplete}
        disabled={disabled}
        placeholder={placeholder}
        rows={4}
        className={`border border-gray-300 ${
          disabled && "cursor-not-allowed"
        }  ${textColor} ${
          variant === "plain"
            ? "bg-gray-100 focus:bg-transparent"
            : "bg-transparent"
        }  placeholder:text-sm placeholder:font-medium w-full focus:ring-0 rounded-md outline-0 focus:border-black ${
          padding ? padding : "p-3"
        }  
       ${
         meta.error && meta.touched
           ? "border-red-500"
           : border
           ? border
           : "border-black"
       }
          }`}
      />
      <div className="h-4 text-right">
        {meta.error && meta.touched && (
          <p className=" text-xs text-right text-red-500">{meta.error}</p>
        )}
      </div>
    </div>
  );
}
