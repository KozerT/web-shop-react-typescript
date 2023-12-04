import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="h-[48px] flex justify-between px-5 text-white items-center bg-black">
      <span className="font-bold">Web shop</span>
      <span>
        <Link to="/" className=" mr-2">
          Products
        </Link>
        <Link to="about">About</Link>
      </span>
    </nav>
  );
};

export default Navigation;
