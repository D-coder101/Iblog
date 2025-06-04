import Image from "next/image";
import { BsCamera } from "react-icons/bs";
import { FaImages } from "react-icons/fa6";
import Dcoder from "@/public/dcoder.jpg";

function ChangeAvatar() {
  return (
    <div className="rounded-2xl border p-4 bg-white flex flex-col md:flex-row items-center gap-x-8 gap-y-3">
      <div className="rounded-full border-[2.5px] border-white h-28 w-28 cursor-pointer z-10 relative group">
        <Image
          src={Dcoder}
          alt=""
          fill
          className="rounded-full object-cover"
          placeholder="blur"
        />

        {/* overlay */}
        <span className="absolute rounded-full transition-all duration-200 ease-in-out opacity-0 grid group-hover:opacity-100 inset-0 bg-black/40 text-gray-200 place-items-center">
          <FaImages size={30} className="text-gray-200" />
        </span>

        {/* photo icon */}
        <span className="rounded-full absolute bottom-1 -right-1 grid place-items-center p-1.5 hover:bg-gray-900 bg-gray-700 text-white border-white border-[1.5px]">
          <BsCamera className="text-sm" />
        </span>
      </div>

      <div className="flex gap-x-2">
        <button className="px-4 md:px-8 py-2 rounded-full bg-black text-xs text-white font-medium ">
          Upload New
        </button>
        <button className="px-4 md:px-8 py-2 rounded-full bg-gray-200 text-xs font-medium ">
          Delete Avatar
        </button>
      </div>
    </div>
  );
}

export default ChangeAvatar;
