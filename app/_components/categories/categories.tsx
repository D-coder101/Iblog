import CategoryCard from "./category-card";
import Blog from "@/public/blog1.webp";

import Designer from "@/public/designer.jpg";
import Developer from "@/public/developer.jpg";
import Editor from "@/public/editor.jpg";
import Gamer from "@/public/gamer.jpg";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

function Categories() {
  return (
    <section className="px-3 pt-20 ">
      <div className="w-full md:max-w-6xl mx-auto space-y-6 ">
        <div className="flex items-center justify-between border-b-2 border-gray-200">
          <div className="relative md:text-2xl font-semibold py-3 before:left-0 before:w-full before:bg-black before:h-[2px] before:rounded-full before:bottom-0 before:absolute before:translate-y-[2px]">
            Categories
          </div>
          <Link
            href="/categories"
            className="text-sm md:text-base flex items-center gap-2 font-semibold hover:underline transition-all duration-200 ease-in-out"
          >
            See all
            <IoArrowForward />
          </Link>
        </div>

        {/*contents  */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <CategoryCard image={Editor} title="Culture" />
          <CategoryCard image={Designer} title="Creativity" />
          <CategoryCard image={Developer} title="Technology" />
          <CategoryCard image={Blog} title="Humor" />
          <CategoryCard image={Gamer} title="Music" />
          <CategoryCard image={Blog} title="Health" />
        </div>
      </div>
    </section>
  );
}

export default Categories;
