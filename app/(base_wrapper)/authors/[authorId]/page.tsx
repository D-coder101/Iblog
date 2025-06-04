import Image from "next/image";
import Tech from "@/public/tech.jpg";
import Dcoder from "@/public/dcoder.jpg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { GoBriefcase } from "react-icons/go";
import { FaImages, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { GoDotFill } from "react-icons/go";
// import { FiClock } from "react-icons/fi";
import Link from "next/link";
import Article from "@/app/_components/author/article";

export default async function Page({
  params,
}: {
  params: Promise<{ authorId: string }>;
}) {
  console.log(params);

  return (
    <section className="mb-40">
      <div className=" flex flex-col gap-y-5">
        {/*cover pic */}
        <div className=" h-48 md:h-64 lg:h-72 relative cursor-pointer w-full group">
          <Image
            src={Tech}
            alt=""
            fill
            className=" object-cover "
            placeholder="blur"
          />

          {/* overlay */}
          <span className="absolute rounded-lg transition-all duration-200 ease-in-out opacity-0 grid group-hover:opacity-100 inset-0 bg-black/40 text-gray-200 place-items-center">
            <p className="font-medium md:text-2xl">Change Photo</p>
          </span>
        </div>

        {/*author-details */}
        <div className="px-14 flex flex-col items-center gap-y-3 mx-auto">
          {/*profile pic */}
          <div className="rounded-full border-[2.5px] border-white h-28 w-28 md:h-36 md:w-36 cursor-pointer -mt-20 z-10 relative group">
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
          </div>

          <div className="flex flex-col items-center gap-y-1.5">
            <h2 className="text-xl font-semibold">Dcoder101</h2>

            <div className="flex flex-col items-center gap-y-1.5">
              {/*followers and following */}
              <div className="flex gap-2 items-center text-base">
                <Link href="/" className="hover:underline">
                  1.2K Followers
                </Link>
                <GoDotFill size={5} />
                <Link href="/" className="hover:underline">
                  131 Following
                </Link>
              </div>

              {/*socials */}
              <div className="flex items-center gap-2 text-gray-500">
                <span className="hover:text-green-500 cursor-pointer duration-200 ease-in-out">
                  <IoLogoWhatsapp size={22} />
                </span>
                <span className="hover:text-orange-700 cursor-pointer duration-200 ease-in-out">
                  <TiSocialInstagram size={25} />
                </span>
                <span className="hover:text-blue-500 cursor-pointer duration-200 ease-in-out">
                  <FaLinkedin size={22} />
                </span>
                <span className="hover:text-black cursor-pointer duration-200 ease-in-out">
                  <FaXTwitter size={20} />
                </span>
              </div>
            </div>

            {/*date joined */}
            <div className="flex flex-col md:flex-row gap-x-2 items-center">
              <div className="flex items-center gap-2">
                <GoBriefcase size={18} />
                <span>Web Developer</span>
              </div>
              <GoDotFill size={5} className="hidden md:block" />
              <div className="flex items-center gap-2">
                <FaRegCalendarAlt size={15} />
                <span>Joined on Sep 18, 2024</span>
              </div>
            </div>
            {/* <p>Author: {params.authorId}</p> */}
          </div>
        </div>

        <Article />
      </div>
    </section>
  );
}
