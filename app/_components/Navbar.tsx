"use client";
import Link from "next/link";
import { links } from "./Links";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex items-center gap-4 lg:gap-10">
        {links.map(({ title, path }) => (
          <li key={title} className={`btn-${title}`}>
            <Link
              href={path}
              className="relative text-sm lg:text-base font-semibold pb-[6px]"
            >
              {title}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2.5px] ${
                  pathname === path ? "bg-black" : ""
                }  rounded-full`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
