import Image from "next/image";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CardProps {
  src: string | StaticImport;
  product: string;
  desc: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ src, product, desc, price }) => {
  return (
    <div className="rounded-lg border-2 shadow-md hover:shadow-xl bg-white hover:cursor-pointer">
      <div className="h-40 relative">
        <Image
          src={src}
          alt="this nike shoees"
          className="rounded-t-lg"
          objectFit="fill" // lebar dan tinggi gambar akan di perbesar
          layout="fill" // lebar dan tinggi gambra akan sesuai dengan parentnya
        />
      </div>
      <div className="mx-2 mb-2">
        <label className="font-extrabold text-lg">{product}</label>
        <p className="truncate">{desc}</p>
        <p>Rp. {price}</p>
      </div>
    </div>
  );
};

export default Card;
