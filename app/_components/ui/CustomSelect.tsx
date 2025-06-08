// // import { FaChevronDown } from "react-icons/fa";
// // import { FaCaretDown } from "react-icons/fa";

// function CustomSelect({
//   options,
//   onChange,
//   name,
//   placeholder,
//   register,
//   validation = {},
//   error,
//   className = "",
// }) {
//   return (
//     <div className={`relative ${className}`}>
//       <select
//         id={name}
//         name={name}
//         onChange={onChange}
//         {...register(name, validation)}
//         className={` w-full bg-slate-200 border-2 py-2.5 px-4  rounded-md text-sm focus:outline-none focus:ring-0 focus:border-orange-300 ${
//           error ? "border-red-500" : "border-gray-300"
//         }`}
//       >
//         <option value="" disabled hidden>
//           {placeholder}
//         </option>
//         {options?.map((option, index) => (
//           <option key={index} value={option.id || option} className="bg-white">
//             {option.text || option}
//           </option>
//         ))}
//       </select>
//       {/* <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//         <FaCaretDown className="text-gray-500" />
//       </div> */}
//       <div className="h-4 text-right">
//         {error && (
//           <p className=" text-xs text-right text-red-500">{error.message}</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CustomSelect;
