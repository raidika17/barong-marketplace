"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import Button from "./Button";

interface SlideCarouselProps {
  img: string | StaticImport;
  title: string;
  mainTitle: string;
  price: string;
}

const SlideCarousel: React.FC<SlideCarouselProps> = ({
  img,
  mainTitle,
  title,
  price,
}) => {
  return (
    <div className="outline-none border-none relative h-52 md:h-[500px]">
      <Image src={img} layout="fill" objectFit="fill" alt="banner" />
      <div className="absolute left-[18px] md:left-[26px] max-w-[250px] sm:max-w-[350px] top-[50%]-translate-y-[50%] my-4 space-y-2 lg:space-y-4 p-4 sm:p-0">
        <h3 className="text-orange-300 text-[20px] md:text-5xl font-extrabold">
          {title}
        </h3>
        <h2 className="text-black text-lg md:text-xl font-bold leading-[1.2]">
          {mainTitle}
        </h2>
        <h3 className="text-gray-400 text-[14px]">
          Starting at{" "}
          <b className="text-lg md:text-[20px] font-extrabold">Rp. {price}</b>
        </h3>
        <Button msg="Shop Now" />
      </div>
    </div>
  );
};

export default SlideCarousel;
