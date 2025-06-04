import Tech from "@/public/technology.png";
import Politics from "@/public/politician.png";
import Lifestyle from "@/public/lifestyle.png";
import Health from "@/public/healthcare.png";
import Education from "@/public/education.png";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { title: "Education", icon: Education, path: "education" },
  { title: "LifeStyle", icon: Lifestyle, path: "lifestyle" },
  { title: "Politics", icon: Politics, path: "politics" },
  { title: "Health", icon: Health, path: "health" },
  { title: "Technology", icon: Tech, path: "technology" },
];

function Page() {
  return (
    <div className="px-3 pt-10 mb-40">
      <div className="md:max-w-5xl mx-auto w-full flex flex-col gap-10">
        <h2 className="text-2xl font-semibold">All Categories</h2>
        <div className="flex justify-between gap-3">
          {categories.map(({ title, icon, path }) => (
            <Link
              href={`/categories/${path}`}
              className="flex flex-col gap-2 items-center group"
              key={path}
            >
              <span className="rounded-full h-[100px] w-[100px] border shadow group-hover:shadow-lg group-hover:scale-110 grid place-items-center transition-all duration-200 ease-in-out">
                <Image
                  src={icon}
                  alt=""
                  // fill
                  className=" object-cover h-[70px] w-[70px]"
                  // placeholder="blur"
                />
              </span>
              {/*icon */}
              {/* <Image
                src={icon}
                alt="tech"
                width={100}
                height={100}
                className=""
              /> */}
              {/*text */}
              <p className="font-semibold text-lg">{title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
