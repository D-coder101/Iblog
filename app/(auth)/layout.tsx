import BgImage from "@/public/banner1.webp";
import Image from "next/image";
// import { FaArrowLeft } from "react-icons/fa";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

// [1fr_0.7fr]
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_0.8fr] min-h-screen bg-gray-100">
      {/* bg-[linear-gradient(to_right, rgba(255,0,0,0), rgba(255,0,0,1))] */}

      <div className="hidden md:block">
        <div className="relative h-full w-full">
          <Image
            src={BgImage}
            alt=""
            fill
            className="object-cover w-full h-full "
            placeholder="blur"
          />

          {/* overlay*/}
          <div className="absolute z-50 w-full h-full overlay bg-blend-overlay">
            {/*overlay text */}
            <div className="absolute text-gray-300 bottom-8 h-fit  p-8 space-y-6">
              <p className="text-xl italic">
                {/* &quot; */}
                <sup>
                  <FaQuoteLeft className="inline" />
                </sup>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis illum quam, voluptatem quaerat eligendi
                exercitationem. Quam, dolorum amet placeat sequi laboriosam
                debitis aspernatur alias repellendus.
                <sup>
                  <FaQuoteRight className="inline" />
                </sup>
                {/* &quot; */}
              </p>

              {/*writter details */}
              <div className="flex justify-between text-sm text-gray-400">
                <div className="flex items-center gap-x-2 font-serif">
                  <p>Mary Jane</p>
                  <GoDotFill size={6} />
                  <p>Freelancer</p>
                </div>
                <div className="flex items-center gap-x-[2px]">
                  <span className="grid place-items-center bg-transparent hover:bg-gray-100 rounded-full h-8 w-8 shadow-lg cursor-pointer group transition-all duration-300 ease-in-out hover:-translate-x-2">
                    <FaArrowLeftLong
                      size={15}
                      className="group-hover:text-gray-800"
                    />
                  </span>
                  <span className="grid place-items-center bg-transparent hover:bg-gray-100 rounded-full h-8 w-8 shadow-lg cursor-pointer group transition-all duration-300 ease-in-out hover:translate-x-2">
                    <FaArrowRightLong
                      size={15}
                      className="group-hover:text-gray-800"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid place-items-center px-3 md:px-0">{children}</div>
    </div>
  );
}

export default Layout;
