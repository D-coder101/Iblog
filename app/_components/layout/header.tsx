"use client";

import Link from "next/link";
import Navbar from "./navbar";
import { FiMenu } from "react-icons/fi";
import { FaUser } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";
import { useEffect, useState } from "react";
import { RxDashboard } from "react-icons/rx";
// import { LuLogOut } from "react-icons/lu";
import { FaPowerOff } from "react-icons/fa6";
import SideNav from "./sidenav";
import { useCloseOnScroll } from "../../_hooks/useCloseOnScroll";
import { useOutsideClick } from "../../_hooks/useOutsideClick";
import { useGlobalStore } from "@/store/zustand-store";
import Modal from "../../_context/modal-context";
import ConfirmAction from "../modal-types/confirm-action";
// import { useRouter } from "next/navigation";
import { useLogout } from "@/app/_hooks/useLogout";
import { SlSettings } from "react-icons/sl";
import { IUser } from "@/utils/types";
import { logoutAction } from "@/app/_actions/authActions";
// import { logoutAction } from "@/app/_actions/authActions";

const userDropdownItem = [
  {
    id: 1,
    name: "My Profile",
    icon: AiOutlineUser,
    link: "/authors/Dcoder101",
  },
  // {
  //   id: 2,
  //   name: "My Blogs",
  //   icon: AiOutlineRead,
  //   link: "/blogs",
  // },
  {
    id: 3,
    name: "Dashboard",
    icon: RxDashboard,
    link: "/dashboard",
  },
  {
    id: 4,
    name: "Settings",
    icon: SlSettings,
    link: "/settings",
  },
  {
    id: 5,
    name: "Sign out",
    icon: FaPowerOff,
  },
];

function Header({ user }: IUser) {
  // const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { logout, isPending: isLoggingOut } = useLogout(); //logout function
  const { updateHeaderHeight } = useGlobalStore((state) => state);

  // const user = true;

  //getting header's height dynamically
  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      updateHeaderHeight(header.offsetHeight);
    }

    const adjustHeight = () => {
      if (header) {
        updateHeaderHeight(header.offsetHeight);
      }
    };

    window.addEventListener("resize", adjustHeight);
    window.addEventListener("DOMContentLoaded", adjustHeight);

    return () => {
      window.removeEventListener("resize", adjustHeight);
      window.removeEventListener("DOMContentLoaded", adjustHeight);
    };
  }, [updateHeaderHeight]);

  const handleToggleDropdown = () => {
    setIsDropdownOpen((curr) => !curr);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useCloseOnScroll(isDropdownOpen, closeDropdown); //close dropdown on scroll
  const dropDownRef = useOutsideClick<HTMLUListElement>(closeDropdown); //close dropdown onClick outside

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

  // const handleCloseModal = async (onCloseModal: () => void) => {
  //   await logoutAction();
  //   onCloseModal();
  // };

  const handleCloseModal = (onCloseModal: () => void) => {
    logout(undefined, {
      onSuccess: () => {
        onCloseModal();
        // router.push("/");
        // updateFullName(values.username);
      },
    });
  };

  return (
    <header className="header px-3 sticky top-0 left-0 right-0 z-20 bg-white shadow">
      <div className=" md:max-w-[1200px] mx-auto flex items-center justify-between py-2 md:py-3">
        <span onClick={() => setIsOpen(true)} className=" md:hidden">
          <FiMenu size={20} />
        </span>

        {/*Logo */}
        <Link href="/" className="font-bold font-serif text-2xl italic">
          iBlog
        </Link>

        {/*Navbar */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/*auth session */}
        <div className="flex gap-x-2 items-center">
          {/* <button className="flex justify-center items-center p-2 rounded-lg bg-gray-100 border text-lg font-semibold">
            <FiSearch />
          </button> */}
          <div className={`gap-x-2 ${!user ? "flex" : "hidden"}`}>
            <Link
              href="/login"
              className="flex justify-center items-center py-2 px-3 text-sm  font-medium rounded-md border-[1.4px] border-black"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="focus:outline-0 hidden md:flex rounded-md bg-black text-white justify-center items-center py-2 px-3 text-sm"
            >
              Sign up
            </Link>
          </div>

          {/*dropdown */}
          {user && (
            <div className="relative">
              <button
                className="rounded-full border flex items-center gap-x-1.5 transition-all duration-200 ease-in-out p-1 md:py-1 md:px-1.5 hover:shadow-lg focus:outline-0"
                onClick={handleToggleDropdown}
              >
                <span className="rounded-full grid place-items-center h-7 w-7 bg-gray-200">
                  <FaUser className="text-gray-400" />
                </span>
                <FiMenu size={20} className="text-gray-600 hidden md:block" />
              </button>

              <ul
                className={`absolute p-2 md:min-w-36 mt-1 right-0 rounded-md shadow-menu transition-all duration-200 ease-in-out bg-white  ${
                  isDropdownOpen ? "visible opacity-1" : "invisible opacity-0"
                }`}
                ref={dropDownRef}
              >
                {userDropdownItem.map(({ icon: Icon, link, id, name }) => (
                  <li
                    className="hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-md"
                    onClick={() => setIsDropdownOpen(false)}
                    key={id}
                  >
                    {link ? (
                      <Link
                        href={`${link}`}
                        className=" text-sm py-1.5 px-3 gap-x-1.5 flex items-center"
                      >
                        <Icon size={15} />
                        {name}
                      </Link>
                    ) : (
                      <Modal>
                        <Modal.Open opens="text">
                          <button className="text-sm mt-2 py-2 px-3 gap-x-1.5 flex items-center justify-center bg-red-500 hover:bg-red-600 duration-200 ease-in-out rounded-md w-full capitalize text-white">
                            <Icon size={15} />
                            {name}
                          </button>
                        </Modal.Open>
                        <Modal.Window name="text">
                          <ConfirmAction
                            title="Logout"
                            action={logoutAction}
                            // isLoading={isLoggingOut}
                            // onConfirm={(onCloseModal: () => void) =>
                            //   handleCloseModal(onCloseModal)
                            // }
                            resourceMessage="Logout"
                            // isLoading={deleting}
                          />
                        </Modal.Window>
                      </Modal>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <SideNav isOpen={isOpen} onClose={closeSideNav} />
    </header>
  );
}

export default Header;
