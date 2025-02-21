import Image from "next/image";
import Blog from "../../public/blog1.webp";
import avatar from "../../public/avatar.png";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import { FaHandsClapping } from "react-icons/fa6";
// import { AiOutlineComment } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
{
  /* <li className=" flex flex-col  rounded-xl shadow cursor-pointer hover:shadow-lg transition-all duration-200 group"> */
}
interface BlogProps {
  id: number;
  isRecommended?: boolean;
}

function BlogCard({ id, isRecommended }: BlogProps) {
  return (
    <li className="flex flex-col rounded-xl  cursor-pointer transition-all duration-200 group">
      <Link href={`/blog/${id}`}>
        <div className="h-48 relative group/container overflow-hidden rounded-xl">
          <Image
            src={Blog}
            alt=""
            fill
            className="rounded-xl object-cover group-hover/container:scale-110 transition-all duration-300 ease-in-out"
            placeholder="blur"
          />
          <span className="rounded-full bg-black/30 py-1.5 px-3 text-xs md:text-sm font-medium w-fit absolute text-white top-2.5 left-2.5">
            Lifestyle
          </span>
        </div>
        {/*section-2 */}
        {/* <div className="p-4 flex flex-col gap-1 bg-white rounded-bl-xl rounded-br-xl"> */}
        <div className="pt-4 flex flex-col gap-1 rounded-bl-xl rounded-br-xl">
          <div className="flex gap-2 items-center text-slate-600 text-xs">
            <div className="flex items-center gap-1">
              <FaRegCalendarAlt />
              <span className=" font-medium">September 18, 2024</span>
            </div>
            <GoDotFill size={10} />
            <div className="flex items-center gap-1">
              <FiClock />
              <span className="font-medium ">15 mins read</span>
            </div>
          </div>
          <p className="font-medium line-clamp-2 mt-1 text-sm md:text-lg group-hover:underline">
            Unveiling the Secrets Beyond the Tourist Trails
          </p>
          <p className="line-clamp-2 text-xs md:text-base font-medium text-slate-500">
            Dive into the local culture, discover hidden spots, and experience
            the authentic charm that often goes unnoticed.
          </p>

          {/*others */}
          {isRecommended ? (
            <div className="flex items-center justify-between text-stone-600 mt-2">
              <div className="flex gap-6">
                <span className="flex gap-1.5 items-center text-sm">
                  <FaHandsClapping size={18} />
                  100
                </span>
                <span className="flex gap-1.5 items-center text-sm">
                  <IoIosChatbubbles size={18} />2
                </span>
              </div>

              <div className="flex gap-6 items-center">
                {/* <MdOutlineBookmarkAdd size={22} /> */}
                <FaBookmark size={18} />
                <SlOptions size={18} />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 mt-2">
              <span className="rounded-full w-6 h-6 md:w-8 md:h-8 relative">
                <Image
                  src={avatar}
                  alt="avatar"
                  className="object-cover rounded-full"
                  placeholder="blur"
                />
              </span>
              <p className="text-xs md:text-sm font-medium truncate">
                Theodore Reginald
              </p>
            </div>
          )}
        </div>
      </Link>
    </li>
  );
}
export default BlogCard;
