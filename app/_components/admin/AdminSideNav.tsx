"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMailOpenOutline, IoPersonOutline } from "react-icons/io5";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { PiNotePencilFill } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const navLinks = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LuLayoutDashboard,
  },
  {
    name: "Add Blog",
    href: "/admin/addBlog",
    icon: IoAddCircleOutline,
  },
  {
    name: "BlogLists",
    href: "/admin/blogList",
    icon: PiNotePencilFill,
  },
  {
    name: "Categories",
    href: "/admin/categories",
    icon: HiOutlineClipboardDocumentList,
  },
  {
    name: "Authors",
    href: "/admin/authors",
    icon: IoPersonOutline,
  },
  {
    name: "Subscriptions",
    href: "/admin/subscriptions",
    icon: IoMailOpenOutline,
  },
  {
    name: "Notifications",
    href: "/admin/notifications",
    icon: MdOutlineNotificationsActive,
  },
];

function AdminSideNav() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const toggleNav = () => {
    setIsOpen((curr) => !curr);
  };

  return (
    <nav
      className={` ${
        !isOpen ? "w-12" : "w-60"
      }   relative duration-300 ease-in-out`}
    >
      <button
        className="absolute rounded-full h-8 w-8 border -right-4 bg-black text-white grid -top-10 place-content-center"
        onClick={toggleNav}
      >
        <IoIosArrowDown className={`${isOpen ? "rotate-90" : "-rotate-90"}`} />
      </button>
      <ul className="flex flex-col items-center gap-6 text-lg mt-14">
        {navLinks.map(({ name, href, icon: Icon }) => (
          <li
            key={name}
            className={`transition-all text-sm duration-200 w-4/5 rounded-full ${
              pathname === href
                ? "bg-black text-white font-semibold hover:bg-black"
                : "bg-gray-100 font-medium hover:bg-gray-200"
            }`}
          >
            <Link
              href={href}
              className={`flex items-center justify-center rounded-full py-2 px-1 ${
                isOpen && "gap-1.5"
              }`}
            >
              {Icon && <Icon size={20} />}
              <span className={`duration-300 ${!isOpen && "hidden"} `}>
                {name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default AdminSideNav;
