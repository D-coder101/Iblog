import Marketer from "@/public/marketer.jpg";
import Image from "next/image";

function Subscribe() {
  return (
    <section className="my-20 relative h-72 md:h-96 lg:h-[550px] overflow-hidden">
      <div className=" h-56 lg:h-96 w-[110%] rotate-6 origin-top-left mx-auto">
        <Image
          src={Marketer}
          alt=""
          fill
          className="object-cover w-full h-full"
          // placeholder="blur"
        />

        {/*overlay */}
        <div className=" inset-0 bg-black/30 z-10 absolute font-bold text-gray-200 text-base sm:text-lg md:text-xl grid place-items-center">
          {/*overlay text */}
          <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-5 w-2/3 md:max-w-[550px] mx-auto -rotate-6">
            <p className="text-lg sm:xl md:text-2xl lg:text-4xl font-semibold capitalize text-center">
              get our latest posts straight to your inbox
            </p>

            <input
              type="text"
              className="outline-none rounded-full px-6 py-1.5 sm:py-2 lg:py-3 text-sm md:w-2/3 text-gray-600 font-medium focus:ring-2 focus:ring-gray-400 duration-200 ease-in-out"
              placeholder="email@gmail.com"
            />

            <button className="relative bg-white text-white hover:text-black duration-200 ease-in-out rounded-full flex items-center justify-center text-xs sm:text-base py-2 px-6 font-medium before:absolute before:w-full before:left-0 before:top-0 before:h-1/2 before:bg-black before:rounded-t-full after:absolute after:w-full after:right-0 after:bottom-0 after:h-1/2 after:bg-black after:rounded-b-full hover:before:w-0 hover:after:w-0 before:duration-200 after:duration-200 after:-z-10 before:-z-10 z-10">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
