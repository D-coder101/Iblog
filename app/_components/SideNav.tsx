"use client";

import { useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { links } from "./Links";
import Link from "next/link";

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideNav({ isOpen, onClose }: SideNavProps) {
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
        className={`fixed top-0 left-0 md:hidden p-5 min-h-screen w-64 z-30 bg-black transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <span className="rounded-full w-8 h-8 bg-white flex justify-center items-center absolute top-3 right-3">
          <CgClose size={20} onClick={onClose} />
        </span>
        <nav className="mt-10">
          <ul className=" text-white space-y-10">
            {links.map(({ title, path }) => (
              <li key={title}>
                <Link
                  href={path}
                  className="text-base font-semibold"
                  onClick={onClose}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
