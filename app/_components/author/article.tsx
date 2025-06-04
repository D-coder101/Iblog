"use client";
import { useState } from "react";
import BlogCard from "../blog/blog-card";

function Article() {
  const [filterBy, setFilterBy] = useState("posts");
  const filters = ["posts", "liked", "saved"];

  return (
    <div className="md:max-w-5xl mx-auto w-full px-3">
      {/*article  */}
      <div className="border-b">
        <div className="grid grid-cols-3 gap-x-1 max-w-56 mx-auto">
          {filters.map((filter, i) => (
            <button
              className={`uppercase focus:outline-0 duration-200 ease-in-out rounded-t-sm font-medium py-2.5 relative  before:h-[2px] before:rounded-full before:transition-all before:duration-200 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2  text-sm hover:before:w-full  before:w-0 ${
                filterBy === filter
                  ? "text-black before:w-full bg-gray-100 before:bg-black"
                  : "text-gray-400 hover:text-gray-500 hover:before:bg-gray-300 hover:bg-gray-50 "
              }`}
              key={i}
              onClick={() => setFilterBy(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      {/* <div className="text-2xl font-semibold items-center flex justify-center mt-10">
            Articles &nbsp;
            <button className="p-1 leading-normal rounded bg-black text-white">
              (8)
            </button>
          </div> */}

      {/*all posts */}
      <div className="mt-6">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-y-12 gap-x-3 sm:gap-x-4 md:gap-x-6">
          {Array.from({ length: 6 }, (_, i) => (
            <BlogCard key={i} id={i} isRecommended />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Article;
