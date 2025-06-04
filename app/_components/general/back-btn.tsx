"use client";

import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

function BackBtn() {
  const router = useRouter();

  return (
    <div className="flex items-center gap-x-2">
      <button
        className="rounded-full border-gray-700 hover:shadow-md duration-200 ease-in-out hover:bg-gray-700 hover:text-white border-[1.5px] text-gray-600 grid place-items-center p-1"
        onClick={() => router.back()}
      >
        <IoIosArrowBack />
      </button>
      <h2 className="md:text-xl font-semibold">Back</h2>
    </div>
  );
}

export default BackBtn;
