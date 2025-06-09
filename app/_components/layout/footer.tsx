import Link from "next/link";
import { FaInstagram, FaFacebook, FaDiscord, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bottom-0 left-0 right-0 flex items-center justify-center bg-black py-14 px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-white gap-x-4 gap-y-10 md:max-w-[1200px]">
        {/*section-1 about */}
        <div className="flex flex-col gap-3 text-center md:text-left max-w-[400px]">
          <Link href="/" className="font-bold font-serif text-2xl italic">
            iBlog
          </Link>
          <p className="text-sm text-gray-400 font-medium">
            iBlog is your go-to platform for insightful stories, tips, and
            trends across a wide range of topics. Discover, learn, and get
            inspired—one blog at a time.
          </p>
        </div>
        <div className="flex justify-center gap-3">
          <ul className="flex flex-col space-y-3 text-gray-400">
            <li className="text-white">About</li>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/">Career</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center gap-3">
          <ul className="flex flex-col space-y-3 text-gray-400">
            <li className="text-white">Support</li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
            <li>
              <Link href="/blog">Return</Link>
            </li>
            <li>
              <Link href="/">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 md:col-span-3 lg:col-auto max-w-[400px] mx-auto w-full">
          <h3>Get Updates</h3>
          <div className="relative w-full flex items-center">
            <input
              type="email"
              className="rounded-md pl-2.5 py-3 pr-28 focus:outline-none text-white border border-gray-500 bg-gray-800 w-full"
              placeholder="Enter your email"
            />
            <button className="absolute right-2 bg-white hover:bg-white/50 transition-all duration-200 text-black py-1.5  px-3 rounded-md font-medium">
              Subscribe
            </button>
          </div>
          <div className="flex justify-between mt-2 text-lg">
            <span className="rounded-full w-10 h-10 bg-gray-800 flex items-center justify-center">
              <a href="#">
                <FaInstagram />
              </a>
            </span>
            <span className="rounded-full w-10 h-10 bg-gray-800 flex items-center justify-center">
              <a href="#">
                <FaXTwitter />
              </a>
            </span>
            <span className="rounded-full w-10 h-10 bg-gray-800 flex items-center justify-center">
              <a href="#">
                <FaFacebook />
              </a>
            </span>
            <span className="rounded-full w-10 h-10 bg-gray-800 flex items-center justify-center">
              <a href="#">
                <FaDiscord />
              </a>
            </span>
            <span className="rounded-full w-10 h-10 bg-gray-800 flex items-center justify-center">
              <a href="#">
                <FaTiktok />
              </a>
            </span>
          </div>
        </div>
        <div className="col-auto md:col-span-3 lg:md:col-span-4 text-center text-gray-400">
          @ 2024 iBlog. All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
