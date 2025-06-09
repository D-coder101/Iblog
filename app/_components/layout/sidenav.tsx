"use client";

import { useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { links } from "../general/links";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { User } from "@/utils/types";

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
}

export default function SideNav({ isOpen, onClose, user }: SideNavProps) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-20 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose} // Close sidenav when overlay is clicked
      ></div>

      {/* Sidenav */}
      <div
        className={`fixed top-0 left-0 md:hidden py-3 pl-3 pr-6 h-screen w-72 z-30 bg-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <span className="rounded-full w-8 h-8 hover:bg-gray-200 bg-gray-100 duration-200 transition-all flex justify-center items-center absolute top-3 right-3">
          <CgClose size={20} onClick={onClose} />
        </span>

        {/*logo */}
        <Link href="/" className="font-bold font-serif text-2xl italic">
          iBlog
        </Link>

        <nav className="mt-12">
          <ul className=" gap-y-5 flex flex-col">
            {links.map(({ title, path }) => (
              <li key={title} className="w-full flex">
                <Link
                  href={path}
                  className={`text-base hover:bg-gray-100 px-2 py-3 w-full  rounded-md font-semibold ${
                    pathname === path &&
                    "bg-gray-100 border-r-[3px] border-r-black"
                  }`}
                  onClick={onClose}
                >
                  {title}
                </Link>
              </li>
            ))}

            {!user ? (
              <div className="flex px-2 gap-x-3 mt-2">
                <button
                  onClick={() => router.push("/login")}
                  className="flex justify-center items-center py-2 px-6 text-sm lg:text-base font-medium rounded-md border-[1.5px] border-black"
                >
                  Log in
                </button>
                <button
                  onClick={() => router.push("/signup")}
                  className="focus:outline-0 flex rounded-md bg-black text-white justify-center items-center py-2 px-6 text-sm lg:text-base"
                >
                  Sign up
                </button>
              </div>
            ) : (
              ""
            )}
          </ul>
        </nav>

        <div className="absolute bottom-3 text-center text-sm font-semibold w-full left-1/2 -translate-x-1/2">
          @ 2024 iBlog. All rights reserved
        </div>
      </div>
    </>
  );
}
