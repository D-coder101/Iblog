import Link from "next/link";
import BlogCard from "./BlogCard";
import { IoArrowForward } from "react-icons/io5";

function Blog() {
  return (
    <section id="blog" className="px-3 py-20 my-8">
      <div className="w-full md:max-w-[1350px] mx-auto space-y-8 ">
        <div className="flex items-center justify-between">
          <h2 className="md:text-2xl lg:text-3xl font-semibold">
            Recent blog posts
          </h2>
          <Link
            href="/blog"
            className="text-sm md:text-base flex items-center gap-2 font-semibold hover:underline transition-all duration-200 ease-in-out"
          >
            See All Stories
            <IoArrowForward />
          </Link>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-6 ">
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
export default Blog;
