// components/Navbar.tsx
import Link from "next/link";
import React from "react";
import { FaUserLarge, FaMessage } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import SearchComponent from "./SearchComponent";

const Navbar: React.FC = () => {
  return (
    <div className="bg-orange-300 px-8 lg:px-12 text-white">
      <div className="pt-6 pb-2 flex justify-between">
        <div className="font-extrabold py-2">
          <Link href="#">BARONG.</Link>
        </div>
        <div className="w-full pl-6 md:px-24">
          <SearchComponent />
        </div>
        <div className="hidden md:flex py-3">
          <div className="mx-4">
            <Link href="/cart">
              <FaShoppingCart />
            </Link>
          </div>
          <div className="mx-4">
            <Link href="message">
              <FaMessage />
            </Link>
          </div>
          <div className="ml-4">
            <Link href="profile">
              <FaUserLarge />
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-center pb-2 text-sm">
        <div className="hover:font-extrabold hover:text-lg  hover:cursor-pointer mx-2">
          Baju Pria
        </div>
        <div className="hover:font-extrabold hover:text-lg hover:cursor-pointer mx-2">
          Baju Wanita
        </div>
        <div className="hover:font-extrabold hover:text-lg hover:cursor-pointer mx-2">
          Topi
        </div>
        <div className="hover:font-extrabold hover:text-lg hover:cursor-pointer mx-2">
          Jam Tangan
        </div>
        <div className="hover:font-extrabold hover:text-lg hover:cursor-pointer mx-2">
          Tas Ransel
        </div>
        <div className="hover:font-extrabold hover:text-lg hover:cursor-pointer mx-2">
          Tas Selempang
        </div>
        <div className="hover:font-extrabold hover:text-lg hover:cursor-pointer mx-2">
          Celana Pria
        </div>
        <div className="hover:font-extrabold hover:text-lg hover:cursor-pointer mx-2">
          Celana Wanita
        </div>
      </div>
    </div>
  );
};

export default Navbar;
