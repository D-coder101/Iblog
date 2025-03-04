import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { FaHandsClapping } from "react-icons/fa6";
import { AiOutlineComment } from "react-icons/ai";
// import { FaRegComment } from "react-icons/fa";
import Avatar from "@/public/avatar.png";
import Tech from "@/public/tech.jpg";
import ResponseCard from "@/app/_components/ResponseCard";
import BlogCard from "@/app/_components/BlogCard";
import ShareButton from "@/app/_components/ShareButton";
import FollowAuthor from "@/app/_components/FollowAuthor";

export default async function Page({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  console.log(params);
  // const blog = await getBlog(params.blogId)
  // const blogId = params.blogId;
  // Blog {blogId}
  return (
    <div className="px-3 pt-10 mb-40">
      <div className="md:max-w-4xl mx-auto w-full flex flex-col gap-2.5">
        {/*category */}
        <button className="rounded-lg border py-1 px-2 w-fit text-sm font-medium shadow-sm cursor-pointer">
          Technology
        </button>
        {/*title */}
        <h1 className="font-bold text-5xl">Evolution of Technology</h1>

        {/*description */}
        <div className="text-stone-500 text-xl font-medium flex justify-between items-center">
          <p>Over the years evolution has rapidly changed...</p>
          {/*share-btn */}
          <ShareButton />
        </div>

        {/*cover-image */}
        <div className="rounded-xl h-96 bg-gray-300 mt-1 relative">
          <Image
            src={Tech}
            alt=""
            fill
            className="rounded-xl object-cover "
            placeholder="blur"
          />
        </div>

        {/*author details */}
        <div className="flex items-center gap-3">
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
          <div className="text-lg">
            <p className="font-medium">Dcoder-101</p>
            {/*date */}
            <div className="flex gap-2 items-center text-slate-500 text-sm font-medium">
              <div className="">Sep 18, 2024</div>
              <GoDotFill size={5} />
              <div className="">15 mins read</div>
            </div>
          </div>
        </div>

        {/*authors content */}
        <div className="mt-5 space-y-4">
          <h2 className="text-2xl font-bold">The Early Days of the Web</h2>
          <p className="text-lg">
            In the beginning, websites were little more than collections of
            static HTML pages. These early sites were simple, text-heavy, and
            often used for basic information sharing. Developers would manually
            code each page, and users could navigate between them using
            hyperlinks. While these pages were functional, they were far from
            the rich, interactive experiences we expect today. The limitations
            of static pages became apparent as the web grew. Users wanted more
            than just text—they wanted images, videos, and the ability to
            interact with content. This demand for more engaging web experiences
            laid the foundation for the next phase in web development.
          </p>
          <h2 className="text-2xl font-bold">The Rise of Dynamic Websites</h2>
          <p className="text-lg">
            As the web evolved, so did the technology behind it. Server-side
            scripting languages like PHP, ASP, and JSP emerged, allowing
            developers to create dynamic websites. Unlike static pages, dynamic
            websites could generate content on the fly based on user input or
            other factors. This made it possible to create more personalized and
            interactive experiences. For example, e-commerce websites could now
            display products based on a user’s browsing history, and news sites
            could show the latest articles without requiring a manual update.
            This shift from static to dynamic content fundamentally changed the
            way users interacted with websites, making the web a more engaging
            and responsive medium.
          </p>
        </div>

        {/*others - clap and comments */}

        <div className="mt-12 space-y-10 border-b pb-14">
          {/*clap and comments */}
          <div className="flex gap-5 text-stone-600">
            <span className="flex gap-1.5 items-center text-sm">
              <FaHandsClapping size={22} />
              1,005
            </span>
            <span className="flex gap-1.5 items-center text-sm">
              <AiOutlineComment size={23} />
              76
            </span>
          </div>

          {/*follow author */}
          <FollowAuthor />
        </div>

        {/*response */}
        <div className="pt-10 py-20 flex flex-col border-b">
          <h2 className="font-bold text-2xl">Responses (76)</h2>
          <div className="relative border-b pb-10 mt-5 group">
            <textarea
              // rows={10}
              className="rounded-md pt-3 h-12 px-4 w-full shadow focus:outline-none group-focus-within:h-48 placeholder:text-sm border resize-none transition-all duration-300 ease-in-out"
              placeholder="What are your thoughts?"
            />
            <div className="bottom-[3.3rem] absolute flex right-4">
              <button className="hidden group-focus-within:block transition-all duration-200 ease-in-out text-black font-medium py-2 px-3 text-xs ">
                Cancel
              </button>
              <button className="rounded-full font-medium bg-black text-white bottom-[3.3rem] py-2 px-3 text-xs disabled:opacity-40 opacity-40 group-focus-within:opacity-100 transition-all duration-200 ease-in-out">
                Respond
              </button>
            </div>
            {/* <button className="absolute rounded-full font-medium right-4 bg-black text-white bottom-[3.3rem] py-2 px-3 text-xs ">
              Respond
            </button> */}
          </div>

          {/*responses */}
          <div className="space-y-8">
            <ul>
              {Array.from({ length: 3 }, (_, i) => (
                <ResponseCard key={i} />
              ))}
            </ul>

            <button className="py-2 px-4 border border-black rounded-full hover:bg-black hover:text-white duration-200 transition-all ease-in-out">
              See all responses
            </button>
          </div>
        </div>

        {/*similar posts */}
        <div className="py-10 space-y-10">
          <h2 className="font-semibold text-2xl">Similar Posts</h2>
          <ul className="grid grid-cols-2 gap-y-8 md:gap-y-12 gap-x-4 md:gap-x-10 ">
            {Array.from({ length: 4 }, (_, i) => (
              <BlogCard key={i} id={i} isRecommended />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
