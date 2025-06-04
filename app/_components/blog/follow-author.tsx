import Image from "next/image";
import Link from "next/link";
import Avatar from "@/public/avatar.png";
import { GoDotFill } from "react-icons/go";

function FollowAuthor() {
  return (
    <div className="flex justify-between gap-5">
      <div className="flex gap-5">
        {/*author-image */}
        <div className="rounded-full w-14 h-14 border bg-gray-300 relative">
          <Image
            src={Avatar}
            alt=""
            fill
            className="rounded-full object-cover"
            placeholder="blur"
          />
        </div>
        {/*date */}
        <div className="text-2xl flex flex-col gap-1">
          <p className="font-medium">Written by Dcoder-101</p>
          {/*date */}
          <div className="flex gap-2 items-center text-slate-600 text-base">
            <Link href="/" className="hover:underline">
              1.2K Followers
            </Link>
            <GoDotFill size={5} />
            <Link href="/" className="hover:underline">
              131 Following
            </Link>
          </div>

          {/*author description */}
          <p className="text-base mt-3">
            Creator of iblog , a blog about coding and tech. Follow me for more
            tech related content.
            <br />
            <Link href="/" className="underline">
              www.iblog.com
            </Link>
          </p>
        </div>
      </div>

      {/*follow-btn */}
      <button className="rounded-full px-5 py-2 h-fit bg-black text-white">
        Follow
      </button>
    </div>
  );
}

export default FollowAuthor;
