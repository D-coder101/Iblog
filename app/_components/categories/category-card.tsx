import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ICategoryProp {
  image: string | StaticImageData;
  title: string;
}

function CategoryCard({ image, title }: ICategoryProp) {
  return (
    <div className="rounded-lg relative group/container h-24 overflow-hidden ">
      {/*overlay */}
      <div className="inset-0 bg-black/20 z-10 absolute  font-bold text-gray-100 text-base sm:text-lg md:text-xl">
        <Link
          href={"/"}
          className="w-full h-full flex items-center justify-center"
        >
          {title}
        </Link>
      </div>

      {/*content */}
      <Image
        src={image}
        alt=""
        fill
        className="object-cover group-hover/container:scale-110 transition-all duration-300 ease-in-out"
        // placeholder="blur"
      />
    </div>
  );
}

export default CategoryCard;
