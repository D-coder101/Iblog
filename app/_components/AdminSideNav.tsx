"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMailOpenOutline, IoPersonOutline } from "react-icons/io5";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { PiNotePencilFill } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";

const navLinks = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LuLayoutDashboard,
  },
  {
    name: "Blog Lists",
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
];

function AdminSideNav() {
  const pathname = usePathname();

  return (
    <nav className="border-r shadow-lg">
      <ul className="flex flex-col items-end gap-6 text-lg pl-12 pt-8">
        {navLinks.map(({ name, href, icon: Icon }) => (
          <li
            key={name}
            className={`transition-all text-sm duration-200 w-full rounded-l-full ${
              pathname === href
                ? "bg-black text-white font-semibold hover:bg-black"
                : "bg-gray-100 font-medium hover:bg-gray-200"
            }`}
          >
            <Link
              href={href}
              className="w-full flex gap-1.5 items-center justify-center rounded-l-full py-2 px-3"
            >
              {Icon && <Icon />}
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default AdminSideNav;
