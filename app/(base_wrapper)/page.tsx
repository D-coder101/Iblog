import Hero from "@/app/_components/home/hero";
import Latest from "@/app/_components/latest";
import Featured from "../_components/featured/featured";
import Categories from "../_components/categories/categories";
import Subscribe from "../_components/subscribe";
// import Carousel from "../_components/carousel/carousel";

// import Designer from "@/public/designer.jpg";
// import Developer from "@/public/developer.jpg";
// import Editor from "@/public/editor.jpg";
// import Gamer from "@/public/gamer.jpg";
// import Marketer from "@/public/marketer.jpg";
// import Image from "next/image";

// const Slides = [Designer, Developer, Editor, Gamer, Marketer];

export default async function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Categories />
      <Latest />
      <Subscribe />

      {/*
      //Testing carousel
      <div className="w-full mx-auto md:max-w-lg mb-20">
        <Carousel autoSlide={true} autoSlideInterval={2000}>
          {Slides.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt=""
              className="object-cover flex-shrink-0 w-full"
              placeholder="blur"
            />
          ))}
        </Carousel>
      </div> */}
    </>
  );
}
