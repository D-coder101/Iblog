"use client";
import Tech from "@/public/technology.png";
import Politics from "@/public/politician.png";
import Lifestyle from "@/public/lifestyle.png";
import Health from "@/public/healthcare.png";
import Education from "@/public/education.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import Link from "next/link";

const categories = [
  { title: "Education", icon: Education, path: "education" },
  { title: "LifeStyle", icon: Lifestyle, path: "lifestyle" },
  { title: "Politics", icon: Politics, path: "politics" },
  { title: "Health", icon: Health, path: "health" },
  { title: "Technology", icon: Tech, path: "technology" },
];

function Page() {
  const router = useRouter();

  return (
    <section className="px-3 pt-10 h-screen">
      <div className="md:max-w-5xl mx-auto w-full flex flex-col gap-10">
        <h2 className="text-2xl font-semibold">All Categories</h2>
        <div className="overflow-x-scroll w-full">
          <ul className="flex justify-between gap-3  min-w-[500px] w-full">
            {categories.map(({ title, icon, path }) => (
              <li
                // href={`/categories/${path}`}
                onClick={() => router.push(`/categories/${path}`)}
                className="flex flex-col gap-2 items-center group w-[100px] cursor-pointer"
                key={path}
              >
                {/* group-hover:scale-110 */}
                <div className="rounded-full  border shadow-sm group-hover:shadow-md grid place-items-center transition-all duration-200 ease-in-out min-h-24 min-w-24">
                  <Image
                    src={icon}
                    alt=""
                    // fill
                    className=" object-cover size-14"
                    // placeholder="blur"
                  />
                </div>
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Page;
