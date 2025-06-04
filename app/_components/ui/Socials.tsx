import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function Socials() {
  return (
    <div className="flex flex-col space-y-2 w-full">
      <button className="rounded-md border-2 py-2.5 flex items-center gap-x-1 justify-center font-medium text-slate-700 text-sm">
        <FcGoogle size={20} />
        Continue with Google
      </button>
      <button className="rounded-md border-2 py-2.5 flex items-center gap-x-1 justify-center font-medium text-slate-700 text-sm">
        <FaApple size={20} />
        Continue with Apple
      </button>
    </div>
  );
}

export default Socials;
