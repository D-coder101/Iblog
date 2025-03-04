import Image from "next/image";
import Tech from "@/public/tech.jpg";
import Dcoder from "@/public/dcoder.jpg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { GoBriefcase } from "react-icons/go";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { GoDotFill } from "react-icons/go";
// import { FiClock } from "react-icons/fi";
import Link from "next/link";
import BlogCard from "@/app/_components/BlogCard";

function Page({ params }: { params: string | number }) {
  console.log(params);
  return (
    <div className="px-3 pt-10 mb-40">
      <div className="md:max-w-5xl mx-auto w-full flex flex-col gap-2.5">
        {/*cover picture */}
        <div className="rouned-lg h-48 md:h-64 lg:h-72   rounded-lg bg-gray-400 relative">
          <Image
            src={Tech}
            alt=""
            fill
            className="rounded-xl object-cover "
            placeholder="blur"
          />
        </div>

        {/*author-details */}
        <div className="px-14 flex gap-4">
          <span className="rounded-full border-[2.5px] border-white h-36 w-36 bg-gray-400 -mt-12 z-10 relative">
            <Image
              src={Dcoder}
              alt=""
              fill
              className="rounded-full object-cover "
              placeholder="blur"
            />
          </span>
          <div className="flex flex-col gap-1.5">
            <h2 className="text-xl font-semibold">Dcoder101</h2>

            {/*socials */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span>
                  <IoLogoWhatsapp size={22} />
                </span>
                <span>
                  <TiSocialInstagram size={25} />
                </span>
                <span>
                  <FaLinkedin size={22} />
                </span>
                <span>
                  <FaXTwitter size={20} />
                </span>
              </div>
              <div className="flex gap-2 items-center text-base">
                <Link href="/" className="hover:underline">
                  1.2K Followers
                </Link>
                <GoDotFill size={5} />
                <Link href="/" className="hover:underline">
                  131 Following
                </Link>
              </div>
            </div>

            {/*date joined */}
            <div className="flex gap-2 items-center">
              <div className="flex items-center gap-2">
                <GoBriefcase size={18} />
                <span>Web Developer</span>
              </div>
              <GoDotFill size={5} />
              <div className="flex items-center gap-2">
                <FaRegCalendarAlt size={15} />
                <span>Joined on Sep 18, 2024</span>
              </div>
            </div>
            {/* <p>Author: {params.authorId}</p> */}
          </div>
        </div>

        {/*article  */}
        <div className="text-2xl font-semibold items-center flex justify-center mt-10">
          Articles &nbsp;
          <button className="p-1 leading-normal rounded bg-black text-white">
            (8)
          </button>
        </div>

        {/*all posts */}
        <div className="mt-6">
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-y-12 gap-x-6">
            {Array.from({ length: 6 }, (_, i) => (
              <BlogCard key={i} id={i} isRecommended />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page;
