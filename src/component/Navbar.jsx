import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[100px] border-b border-black flex justify-between items-center bg-slate-200">
      <div className="px-5 flex justify-between w-full h-[90%]">
        <div className="w-[40%] flex justify-between items-center">
          <ul className="font-bold text-xl font-serif flex gap-12">
            <Link to="/newarrival">
              <li>New Arrivals</li>
            </Link>
            <Link to={"/shop"}>Shop</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/studio"}>Studio IVL</Link>
            <Link to={"/blog"}>Blog</Link>
          </ul>
        </div>
        <div className="w-[30%] flex justify-center items-center">
          <h2 className="text-4xl font-bold font-serif">IVL</h2>
        </div>
        <div className="font-bold text-xl font-serif flex w-[40%] justify-end gap-12 items-center">
          <a href="/">Account</a>
          <a href="/">Cart</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
