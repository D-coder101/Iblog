"use client";

import Link from "next/link";
import Navbar from "./Navbar";
import { FiMenu, FiSearch } from "react-icons/fi";
import { useState } from "react";
import SideNav from "./SideNav";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  //implementing smooth scroll
  //   useEffect(() => {
  //     const btnBlog = document.querySelector(".btn-Blog");
  //     const section1 = document.querySelector("#blog");

  //     btnBlog?.addEventListener("click", function (e) {
  //       const s1Coords = section1?.getBoundingClientRect();

  //  section1?.scrollIntoView({behavior: "smooth"})
  //     });
  //   }, []);

  const closeSideNav = () => {
    setIsOpen(false);
  };

  return (
    <header className="px-3 top-0 left-0 right-0 sticky z-20 bg-white shadow-md">
      <div className="w-full md:max-w-7xl mx-auto flex items-center justify-between py-4">
        {/*Logo */}
        <Link href="/" className="font-bold text-2xl italic">
          iBlog
        </Link>

        {/*Navbar */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/*auth session */}
        <div className="flex gap-3 items-center">
          <button className="flex justify-center items-center p-2 rounded-lg bg-gray-200 text-lg font-semibold">
            <FiSearch />
          </button>
          <div className="flex gap-2">
            <Link
              href="/"
              className="flex justify-center items-center py-2 px-3 text-sm lg:text-base font-semibold"
            >
              Log in
            </Link>
            <button className="focus:outline-0 rounded-md bg-black text-white flex justify-center items-center py-2 px-3 text-sm lg:text-base font-semibold">
              Sign up
            </button>
          </div>
          <span onClick={() => setIsOpen(true)} className=" md:hidden">
            <FiMenu size={20} />
          </span>
        </div>
      </div>

      <SideNav isOpen={isOpen} onClose={closeSideNav} />
    </header>
  );
}

export default Header;
