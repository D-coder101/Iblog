"use client";
import Image from "next/image";
import Avatar from "@/public/avatar.png";
import { SlOptions } from "react-icons/sl";
import { FaHandsClapping } from "react-icons/fa6";
import { AiOutlineComment } from "react-icons/ai";
import { useState } from "react";

function ResponseCard() {
  const [isResponseOpen, setIsResponseOpen] = useState(false);

  const toggleOpenResponse = () => {
    setIsResponseOpen((curr) => !curr);
  };

  return (
    <li className="border-b py-6 flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/*author-image */}
          <div className="rounded-full w-10 h-10 border bg-gray-300 relative">
            <Image
              src={Avatar}
              alt=""
              fill
              className="rounded-full object-cover"
              placeholder="blur"
            />
          </div>
          {/*date */}
          <div className="font-medium">
            <p className="">D-coder101</p>
            {/*date */}
            <p className="text-stone-600 font-normal">Jan 28</p>
          </div>
        </div>

        {/*menu */}
        <div>
          <SlOptions className="text-xl text-gray-600 cursor-pointer hover:text-slate-950" />
        </div>
      </div>

      {/*content */}
      <p className="text-base">
        You make the whole process feel so achievable! I love how you
        highlighted AI tools for scaling content without burning out. I’d add
        that engaging with your audience (like responding to comments or emails)
        can build loyalty and boost traffic even more.
      </p>

      {/*options */}
      <div className="flex gap-6 text-gray-500 mt-1 font-medium">
        <span className="flex gap-2 items-center text-sm">
          <FaHandsClapping
            size={24}
            className="hover:text-slate-950 cursor-pointer"
          />
          390
        </span>
        <span className="flex gap-2 items-center text-sm">
          <AiOutlineComment
            size={24}
            className="hover:text-slate-950 cursor-pointer peer"
          />
          <span className="peer-hover:text-slate-950">5 replies</span>
        </span>

        <button
          className="underline text-slate-950 font-normal cursor-pointer"
          onClick={() => toggleOpenResponse()}
        >
          Reply
        </button>
      </div>

      {/*response form */}
      {isResponseOpen && (
        <div className="border-l ml-3 mt-3">
          <div className="relative  ml-6">
            <textarea
              // rows={10}
              className="rounded-md pt-3 px-4 w-full shadow focus:outline-none h-44 placeholder:text-sm resize-none"
              placeholder="Replying to Dcoder-101"
            />

            <div className="bottom-4 absolute right-4">
              <button
                className="text-black font-medium py-2 px-3 text-xs "
                onClick={() => setIsResponseOpen(false)}
              >
                Cancel
              </button>
              <button className="rounded-full font-medium  bg-black text-white py-2 px-3 text-xs ">
                Respond
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}

export default ResponseCard;
