"use client";
import BlogTable from "@/app/_components/blog/blog-table";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import AdminSort from "@/app/_components/admin/AdminSort";
import { useState } from "react";
import Link from "next/link";
// import AdminFilter from "@/app/_components/AdminFilter";

function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  // top-[87.33px] sticky
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center  bg-white py-2">
        <h2 className="font-semibold text-xl">All Blogs</h2>
        {/*search */}
        <div className="relative flex items-center">
          <FiSearch className="absolute top-1/2 left-2.5 -translate-y-1/2 text-gray-600" />
          <input
            type="text"
            className="rounded-full text-sm placeholder:text-gray-600 pl-8 pr-3 py-1.5 border focus:shadow w-80 focus:outline-none duration-300 ease-in-out transition-shadow"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {/*add-blog-btn & filte-btn*/}
        <div className="flex gap-2">
          {/* <AdminFilter /> */}
          <AdminSort
            options={[
              { value: "startDate-desc", label: "Sort by date (recent first)" },
              { value: "startDate-asc", label: "Sort by date (earlier first)" },
              { value: "name-asc", label: "Sort by name (A-Z)" },
              { value: "name-des", label: "Sort by name (Z-A)" },
            ]}
          />
          <Link
            href="/admin/addBlog"
            className="rounded-full py-1.5 px-3 bg-slate-800 hover:bg-slate-900 text-white flex items-center  gap-1.5 hover:shadow-lg justify-center font-medium text-sm"
          >
            <IoIosAddCircleOutline size={20} />
            Add blog
          </Link>
        </div>
      </div>

      {/*filter and sort */}
      {/* <div className="h-[65vh] overflow-y-auto"> */}
      <BlogTable searchQuery={searchQuery} />
      {/* </div> */}
    </div>
  );
}

export default Page;
