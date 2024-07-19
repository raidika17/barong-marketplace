import React from "react";
import SlideCarousel from "./slideCarousel";
import Slider from "react-slick";
import { nike, nike2, nike3 } from "@/public/images";

const Carousel: React.FC = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
  };

  const slideData = [
    {
      id: 0,
      img: nike,
      title: "Trending Item",
      mainTitle: "Women's latest fashion sale",
      price: "100.000",
    },
    {
      id: 1,
      img: nike2,
      title: "Trending Accessories",
      mainTitle: "Modern Sunglasses",
      price: "25.000",
    },
    {
      id: 2,
      img: nike3,
      title: "Sale Offer",
      mainTitle: "New Fashion Summer Sale",
      price: "50.000",
    },
  ];
  return (
    <div className="container">
      <Slider {...settings}>
        {slideData.map((item) => (
          <SlideCarousel
            key={item.id}
            img={item.img}
            mainTitle={item.mainTitle}
            price={item.price}
            title={item.title}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
