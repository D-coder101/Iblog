"use client";
import React, { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
// import { StaticImageData } from "next/image";

/*const component = memo(fun component() {}) */

interface ICarousel {
  children: React.ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}: ICarousel) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides?.length - 1 : curr - 1));

  //memoized next func to avoid re-renders
  const next = useCallback(() => {
    setCurr((curr) => (curr === slides?.length - 1 ? 0 : curr + 1));
  }, [slides?.length]);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);

    return () => {
      clearInterval(slideInterval);
    };
  }, [autoSlide, autoSlideInterval, next]);

  return (
    <div className="overflow-hidden relative w-full h-full group">
      {/*slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full w-full"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>

      {/*controls */}
      <div className="absolute inset-0 flex items-center     justify-between p-4 text-white">
        <button
          className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white focus:outline-none opacity-0 group-hover:opacity-100 duration-200 ease-in-out"
          onClick={prev}
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white focus:outline-none opacity-0 group-hover:opacity-100 duration-200 ease-in-out"
          onClick={next}
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/*indicators */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex justify-center items-center gap-x-1">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`transition-all duration-300 ease-in-out w-2 h-2 bg-white rounded-full focus:outline-none ${
                curr === i ? "w-4" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
