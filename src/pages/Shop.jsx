import React from "react";
import Navbar from "../component/Navbar";
import item1 from "../assets/item1.jpg";
import item3 from "../assets/item3.jpg";
import item4 from "../assets/item4.jpg";
import item5 from "../assets/item5.jpg";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <>
      <Navbar />
      <section className="h-[calc(100vh-100px)]  text-black w-full  bg-slate-200">
        <div className="">
          <div className="h-[55px] w-full px-5 bg-black flex items-center justify-between font-serif">
            <p className="text-white font-light text-l">
              FREE SHIPPING FOR EVERY DOMESTIC ORDER OVER N10,000
            </p>
            <p className="text-white font-light text-l">
              FREE SHIPPING FOR EVERY DOMESTIC ORDER OVER N10,000
            </p>
            <p className="text-white font-light text-l">
              FREE SHIPPING FOR EVERY DOMESTIC ORDER OVER N10,000
            </p>
          </div>
          <div className="flex justify-between px-5 py-5">
            <h2 className="text-3xl font-bold font-serif">
              The Season's Best Seller
            </h2>
            <Link to={"/productcard"}>
              <p className="border-b border-black text-xl cursor-pointer">
                View All
              </p>
            </Link>
          </div>

          <div className="py-8 w-full flex justify-between gpa-5">
            <img className="rounded-md w-[28%]" src={item1} alt="" />
            <img className="rounded-md w-[28%]" src={item3} alt="" />
            <img className="rounded-md w-[28%]" src={item4} alt="" />
            <img
              className="rounded-l object-cover w-[15%]"
              src={item5}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
