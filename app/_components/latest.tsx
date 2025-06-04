import Link from "next/link";
import BlogCard from "./blog/blog-card";
import { IoArrowForward } from "react-icons/io5";

function Latest() {
  return (
    <section id="blog" className="px-3 py-20">
      <div className="w-full md:max-w-6xl mx-auto space-y-8 ">
        <div className="flex items-center justify-between border-b-2 border-gray-200">
          <div className="relative md:text-2xl font-semibold py-3 before:left-0 before:w-full before:bg-black before:h-[2px] before:rounded-full before:bottom-0 before:absolute before:translate-y-[2px]">
            Latest posts
          </div>
          <Link
            href="/blog"
            className="text-sm md:text-base flex items-center gap-2 font-semibold hover:underline transition-all duration-200 ease-in-out"
          >
            See all
            <IoArrowForward />
          </Link>
        </div>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-6">
          {Array.from({ length: 8 }, (_, i) => (
            <BlogCard key={i} id={i} />
          ))}
        </ul>
        <button className="focus:outline-0 rounded-md mx-auto w-fit bg-black text-white flex justify-center items-center py-2 px-3 text-sm font-medium mt-4 hover:shadow-lg transition-all duration-300">
          Loading More
        </button>
      </div>
    </section>
  );
}
export default Latest;
