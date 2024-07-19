"use client";
import React from "react";

interface ButtonProps {
  msg: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: React.FC<ButtonProps> = ({ msg, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-orange-300  text-white p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-black"
    >
      {msg}
    </button>
  );
};

export default Button;
