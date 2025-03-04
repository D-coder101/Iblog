// import { setTimeout } from "timers/promises";
import BlogCard from "./BlogCard";

interface filterProps {
  filter: string;
  sortBy: string;
}

async function BlogList({ filter, sortBy }: filterProps) {
  console.log(filter, sortBy);
  //
  await new Promise((res) => setTimeout(res, 2000));
  //fetch blog
  // if(!blogs.length) return null

  //   let displayedBlogs;
  // let displayedBlogs = blogs;
  // if (filter !== "all") {
  //   displayedBlogs = blogs.filter((blog) => blog.category === filter);
  // }
  //   if (filter === "all") displayedBlogs = blogs;
  //   if (filter === "destination")
  //     disaplayedBlogs = blogs.filter((blog) => blog.category === "destination");
  //   if (filter === "culinary")
  //    disaplayedBlogs = blogs.filter((blog) => blog.category === "culinary");
  //   if (filter === "lifestyle")
  //    disaplayedBlogs = blogs.filter((blog) => blog.category === "lifestyle");

  return (
    <div className="">
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-6 ">
        {Array.from({ length: 8 }, (_, i) => (
          <BlogCard key={i} id={i} />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
