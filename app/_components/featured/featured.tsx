import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import BlogCard from "../blog/blog-card";

function Featured() {
  return (
    <section className="px-3 pt-20 ">
      <div className="w-full md:max-w-6xl mx-auto space-y-6 ">
        <div className="flex items-center justify-between border-b-2 border-gray-200">
          <div className="relative md:text-2xl font-semibold py-3 before:left-0 before:w-full before:bg-black before:h-[2px] before:rounded-full before:bottom-0 before:absolute before:translate-y-[2px]">
            Featured posts
          </div>
          <Link
            href="/blog"
            className="text-sm md:text-base flex items-center gap-2 font-semibold hover:underline transition-all duration-200 ease-in-out"
          >
            See all
            <IoArrowForward />
          </Link>
        </div>

        {/*contents  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogCard id={2} />
          <div className="grid gap-6">
            <BlogCard id={2} direction="row" />
            <BlogCard id={2} direction="row" />
          </div>
          <div className="grid gap-6">
            <BlogCard id={2} direction="row" />
            <BlogCard id={2} direction="row" />
          </div>
        </div>
        {/* <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-6">
          {Array.from({ length: 8 }, (_, i) => (
            <BlogCard key={i} id={i} />
          ))}
        </ul> */}
      </div>
    </section>
  );
}

export default Featured;
