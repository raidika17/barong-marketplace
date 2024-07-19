import { nike, nike2, nike3 } from "@/public/images";
import React from "react";
import Card from "./Card";

const Content: React.FC = () => {
  const data = [
    {
      src: nike,
      product: "nike",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde ullam autem eaque vel! Ratione neque accusamus, accusantium similique ipsam consectetur quas veniam corrupti provident exercitationem esse cupiditate. Necessitatibus, a.",
      price: "100.000",
    },
    {
      src: nike2,
      product: "nike 2",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde ullam autem eaque vel! Ratione neque accusamus, accusantium similique ipsam consectetur quas veniam corrupti provident exercitationem esse cupiditate. Necessitatibus, a.",
      price: "100.000",
    },
    {
      src: nike3,
      product: "nike 3",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde ullam autem eaque vel! Ratione neque accusamus, accusantium similique ipsam consectetur quas veniam corrupti provident exercitationem esse cupiditate. Necessitatibus, a.",
      price: "100.000",
    },
    {
      src: nike,
      product: "nike",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde ullam autem eaque vel! Ratione neque accusamus, accusantium similique ipsam consectetur quas veniam corrupti provident exercitationem esse cupiditate. Necessitatibus, a.",
      price: "100.000",
    },
    {
      src: nike2,
      product: "nike 2",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde ullam autem eaque vel! Ratione neque accusamus, accusantium similique ipsam consectetur quas veniam corrupti provident exercitationem esse cupiditate. Necessitatibus, a.",
      price: "100.000",
    },
    {
      src: nike3,
      product: "nike 3",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde ullam autem eaque vel! Ratione neque accusamus, accusantium similique ipsam consectetur quas veniam corrupti provident exercitationem esse cupiditate. Necessitatibus, a.",
      price: "100.000",
    },
  ];

  return (
    <div className="container mx-auto sm:max-w-screen-xl mb-10 md:mb-20">
      <h1 className="font-extrabold text-center mt-8 mb-4 sm:text-7xl font-serif">
        New Product
      </h1>
      <div className="flex flex-wrap">
        {data.map((value, index) => {
          return (
            <div
              key={index}
              className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2 sm:p-3 md:p-4 lg:p-5"
            >
              <Card
                src={value.src}
                desc={value.desc}
                product={value.product}
                price={value.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
