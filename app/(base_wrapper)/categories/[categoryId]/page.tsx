// import TechIcon from "@/public/techIcon.png";
import BlogCard from "@/app/_components/blog/blog-card";
import {
  FcElectronics,
  FcGraduationCap,
  FcReading,
  FcHome,
  FcGlobe,
  FcIdea,
  FcGallery,
  FcMultipleDevices,
  // FcBusiness,
  FcPlus,
  FcBusinessman,
} from "react-icons/fc";
// import Image from "next/image";

type CategoryIcons = {
  [key: string]: React.ElementType;
};

// interface PageProps {
//   params: {
//     categoryId: string;
//   };
// }

export default async function Page({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await params;

  const categoryIcons: CategoryIcons = {
    technology: FcElectronics,
    education: FcGraduationCap,
    books: FcReading,
    home: FcHome,
    travel: FcGlobe,
    innovation: FcIdea,
    lifestyle: FcGallery,
    gadgets: FcMultipleDevices,
    politics: FcBusinessman,
    health: FcPlus,
  };

  const SelectedIcon = categoryIcons[categoryId] || null;

  return (
    <div className="px-3 pt-10 mb-40">
      <div className="md:max-w-5xl mx-auto w-full flex flex-col gap-6">
        <div className="text-2xl font-semibold capitalize flex items-center">
          Categories /&nbsp;
          <span className="text-sm rounded-full border py-1 px-2 flex gap-1 items-center shadow">
            {SelectedIcon && <SelectedIcon size={18} />}
            {/* <Image
              src={selectedIcon}
              alt=""
              height={10}
              width={10}
              fill
              className=" object-cover "
              placeholder="blur"
            /> */}
            {categoryId}
          </span>
        </div>

        {/*filtered categories */}
        <div className="mt-6">
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-y-12 gap-x-6">
            {Array.from({ length: 6 }, (_, i) => (
              <BlogCard key={i} id={i} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
