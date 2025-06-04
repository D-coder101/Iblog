import Image from "next/image";
// import Blog from "../../public/blog1.webp";
// import avatar from "../../public/avatar.png";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import { FaHandsClapping } from "react-icons/fa6";
// import { AiOutlineComment } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa";
// import { MdOutlineBookmarkAdd } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
{
  /* <li className=" flex flex-col  rounded-xl shadow cursor-pointer hover:shadow-lg transition-all duration-200 group"> */
}
interface BlogProps {
  id: number;
  isRecommended?: boolean;
  direction?: "row" | "column";
}

function BlogCard({ id, isRecommended, direction }: BlogProps) {
  return (
    <li
      className={`grid cursor-pointer transition-all duration-200 group ${
        direction === "row" ? "grid-cols-[40%_auto] gap-x-5" : "gap-y-3"
      }`}
    >
      <div
        className={` relative group/container overflow-hidden rounded-lg ${
          direction === "row" ? "max-h-40" : "h-40"
        }`}
      >
        <Image
          src="/blog1.webp"
          alt=""
          fill
          className=" object-cover group-hover/container:scale-110 transition-all duration-300 ease-in-out"
          // placeholder="blur"
        />
        <span className="rounded-full bg-black/30 py-1 px-3 text-[10px] sm:text-xs font-medium w-fit absolute text-white top-2 left-2.5">
          Lifestyle
        </span>
      </div>
      {/*section-2 */}
      {/* <div className="p-4 flex flex-col gap-1 bg-white rounded-bl-xl rounded-br-xl"> */}
      <div className=" flex flex-col justify-between gap-2 ">
        <div
          className={`gap-2 items-center text-slate-600 text-xs   ${
            direction === "row" ? "hidden" : "flex"
          }`}
        >
          <div className="flex items-center gap-1">
            <FaRegCalendarAlt />
            <span className=" font-medium">Sep 18, 2024</span>
          </div>
          <GoDotFill size={10} />
          <div className={`flex items-center gap-1 `}>
            <FiClock />
            <span className="font-medium ">15 mins read</span>
          </div>
        </div>
        {/*title */}
        <div className="flex flex-col gap-1 mt-0">
          <div
            className={`items-center gap-1 text-slate-600 text-xs ${
              direction === "row" ? "flex" : "hidden"
            }`}
          >
            <FaRegCalendarAlt />
            <span className=" font-medium">Sep 18, 2024</span>
          </div>
          <p
            className={`font-medium text-base hover:underline ${
              direction === "row" ? "md:text-base" : "md:text-lg"
            }`}
            style={{ lineHeight: 1.3 }}
          >
            <Link href={`/blog/${id}`}>
              Unveiling the Secrets Beyond the Tourist Trails
            </Link>
          </p>
          {/*description */}
          <p
            className={` text-xs md:text-sm font-medium text-slate-500 ${
              direction === "row" ? "line-clamp-1" : "line-clamp-2"
            }`}
          >
            Dive into the local culture, discover hidden spots, and experience
            the authentic charm that often goes unnoticed.
          </p>
        </div>
        {/*others */}
        {isRecommended ? (
          <div className="flex items-center justify-between text-stone-600 mt-2">
            <div className="flex gap-6">
              <span className="flex gap-1.5 items-center text-sm">
                <FaHandsClapping className="text-xs sm:text-sm md:text-lg lg:text-xl" />
                100
              </span>
              <span className="flex gap-1.5 items-center text-sm">
                <IoIosChatbubbles className="text-xs sm:text-sm md:text-lg lg:text-xl" />
                2
              </span>
            </div>

            <div className="flex gap-6 items-center">
              {/* <MdOutlineBookmarkAdd size={22} /> */}
              <FaBookmark className="text-xs sm:text-sm md:text-lg lg:text-xl" />
              <SlOptions className="text-xs sm:text-sm md:text-lg lg:text-xl" />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 mt-2">
            <span
              className="rounded-full w-6 h-6 md:w-8 md:h-8 relative shadow-lg
            "
            >
              <Image
                src="/avatar.png"
                alt="avatar"
                className="object-cover rounded-full"
                fill
                // placeholder="blur"
              />
            </span>
            <p className="text-xs md:text-sm font-medium text-gray-700 truncate">
              Theodore Reginald
            </p>
          </div>
        )}
      </div>
    </li>
  );
}
export default BlogCard;
