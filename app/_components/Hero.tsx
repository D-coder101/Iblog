import Image from "next/image";
import heroBg from "../../public/hero-bg2.jpg";
import avatar from "../../public/avatar.png";
import { GoDotFill } from "react-icons/go";

function Hero() {
  return (
    <section className="w-full md:px-3">
      <div className="w-full mx-auto md:max-w-[1400px] flex justify-center items-center  md:rounded-lg h-[45vh] md:h-[60vh] relative">
        <Image
          src={heroBg}
          placeholder="blur"
          fill
          alt="hero"
          className="object-cover md:rounded-lg"
        />

        {/*hero-content */}
        <div className="flex justify-between px-5 absolute bottom-5 text-white items-center border border-gray-500 w-full bg-black/30 py-2 md:py-8 max-w-[97%] backdrop-blur-sm rounded-lg">
          {/* section-1 */}
          <div className="flex flex-col gap-2 max-w-[350px] sm:max-w-[400px] lg:max-w-[550px]">
            {/*category */}
            <span className="rounded-full bg-black/30 py-1.5 md:py-2 px-2.5 text-xs md:text-sm font-medium w-fit">
              Destination
            </span>
            <h3 className="font-medium md:text-2xl lg:text-3xl">
              Exploring the Wonders of Hiking
            </h3>
            <p className="text-xs md:text-sm lg:text-base">
              An iconic landmarks, this post unveils the secrets that make this
              destination a traveler&apos;s paradise
            </p>
          </div>

          {/*section-2 */}
          <div className=" flex-col gap-2 hidden md:flex">
            <div className="flex items-center gap-2">
              <span className="rounded-full w-9 h-9 relative">
                <Image
                  src={avatar}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </span>
              <p>Theodore Reginald</p>
            </div>
            <p className="flex justify-end items-center gap-1 text-sm">
              <span>24 Jan 2024</span>
              <GoDotFill size={7} />
              <span>10 mins read</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
