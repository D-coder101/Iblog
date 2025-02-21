import Image from "next/image";
import { IoShareSocialOutline } from "react-icons/io5";

function ShareButton() {
  return (
    <div className="relative">
      <button className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center p-1 text-slate-900 cursor-pointer peer">
        <IoShareSocialOutline />
      </button>

      <div className="absolute p-4 top-2 right-0 shadow-lg bg-white rounded-lg z-10 text-sm border min-w-[420px] space-y-2 invisible opacity-0 scale-50 peer-focus-within:visible peer-focus-within:opacity-100 peer-focus-within:scale-100 transition-all duration-300">
        {/*tooltip */}

        <div className="flex items-center gap-2">
          <Image src={"/whatsapp.svg"} alt="" width={38} height={38} />
          <Image src={"/linkedin.svg"} alt="" width={40} height={40} />
          <Image src={"/facebook.svg"} alt="" width={38} height={38} />
          <Image src={"/twitter.svg"} alt="" width={40} height={40} />
        </div>
        <div className="space-y-1.5">
          <p className="text-sm">or copy link</p>
          <div className="relative">
            <div className="rounded-full bg-gray-200 py-2 pl-3 pr-6 text-ellipsis">
              https://iblog.com/blog/evolution-of-technology
            </div>
            <button className="absolute top-0 right-0  bg-black flex items-center justify-center p-3 h-full rounded-full text-white">
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareButton;
