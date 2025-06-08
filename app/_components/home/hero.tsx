"use client";

import Image from "next/image";
// import avatar from "../../public/avatar.png";

import Tech from "@/public/tech1.jpg";
import B2 from "@/public/b2.jpg";
import B3 from "@/public/b3.jpg";
import B4 from "@/public/b4.jpg";
import B5 from "@/public/b5.jpg";
import B6 from "@/public/b6.jpg";
import Carousel from "../carousel/carousel";
// import { useGlobalStore } from "@/store/zustand-store";

function Hero() {
  // const headerHeight = useGlobalStore((state) => state.headerHeight);

  // useEffect(()=>{
  //   setPaddingTop(window.matchMedia("(min-width: 768px)").matches
  //     ? `${headerHeight + 20}px`
  //     : `${headerHeight}px`);
  // }, [headerHeight])

  //  md:px-3 md:pt-5
  // h-[45vh] md:h-[60vh] lg:h-[70vh]
  const Slides = [Tech, B2, B3, B4, B5, B6];

  return (
    <section
      className="w-full"
      // style={{
      //   paddingTop: window.matchMedia("(min-width: 768px)").matches
      //     ? `${headerHeight + 20}px`
      //     : `${headerHeight}px`  ,
      // }}
    >
      <div className="flex h-[40vh] md:h-[45vh] relative ">
        {/* <div> */}
        <Carousel autoSlide={true} autoSlideInterval={3000}>
          {Slides.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt=""
              className="object-cover object-center flex-shrink-0 w-full min-h-full"
              placeholder="blur"
            />
          ))}
        </Carousel>

        {/*overlay */}
        {/* <div className="absolute w-full h-full pointer-events-none bg-gradient-to-b from-gray-300 to-gray-700 opacity-40"></div> */}

        {/* </div> */}
        {/* <div className="mx-auto md:max-w-[1200px] flex justify-center items-center md:rounded-lg h-[45vh] md:h-[60vh] lg:h-[70vh] relative"> */}
        {/* <Image
          // src="/heroBg2.jpg"
          src={heroBg}
          alt="hero"
          className="object-cover"
          placeholder="blur"
          fill
        /> */}
        {/*hero-content */}
        {/* <div className="flex justify-between px-5 absolute bottom-5 text-white items-center border border-gray-500 w-full bg-black/30 py-2 md:py-8 max-w-[97%] backdrop-blur-sm rounded-lg">
          <div className="flex flex-col gap-2 max-w-[350px] sm:max-w-[400px] lg:max-w-[550px]">
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

          <div className=" flex-col gap-2 hidden md:flex">
            <div className="flex items-center gap-2">
              <Image
                src="/avatar.png"
                alt="avatar"
                width={36}
                height={36}
                className="rounded-full object-cover"
              />
              <p>Theodore Reginald</p>
            </div>
            <p className="flex justify-end items-center gap-1 text-sm">
              <span>24 Jan 2024</span>
              <GoDotFill size={7} />
              <span>10 mins read</span>
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
export default Hero;
