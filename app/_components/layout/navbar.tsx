"use client";
import Link from "next/link";
import { links } from "../general/links";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex items-center gap-4 lg:gap-10">
        {links.map(({ title, path }) => (
          <li key={title} className="">
            <Link
              href={path}
              className={`relative before:h-[2px] before:rounded-full before:transition-all before:duration-300 before:bg-black before:absolute before:bottom-0 before:translate-y-1 text-sm hover:before:w-full lg:text-base font-medium ${
                pathname === path ? "before:w-full" : "before:w-0"
              }`}
            >
              {title}
              {/* <span
                className={`absolute bottom-0 left-0 w-full h-[2.5px] ${
                  pathname === path ? "bg-black" : ""
                }  rounded-full`}
              /> */}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
