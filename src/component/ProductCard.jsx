import React from "react";
import Navbar from "./Navbar";
import item13 from "../assets/item13.jpg";
import item12 from "../assets/item12.jpg";
import item11 from "../assets/item11.jpg";
import item10 from "../assets/item10.jpg";
import item9 from "../assets/item9.jpg";
import item8 from "../assets/item8.jpg";
import item7 from "../assets/item7.jpg";
import item6 from "../assets/item6.jpg";
import item5 from "../assets/item5.jpg";
import item4 from "../assets/item4.jpg";
import item3 from "../assets/item3.jpg";
import item1 from "../assets/item1.jpg";
import PhotoCard from "./PhotoCard";

const ProductCard = ({ image, price }) => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-[100vh] px-5 bg-slate-200">
        <h2 className="text-center py-4 font-bold font-serif text-4xl">
          Products and Prices
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 py-7">
          <PhotoCard price={500} image={item13} />
          <PhotoCard price={540} image={item12} />
          <PhotoCard price={500} image={item11} />
          <PhotoCard price={500} image={item10} />
          <PhotoCard price={500} image={item9} />
          <PhotoCard price={300} image={item8} />
          <PhotoCard price={200} image={item7} />
          <PhotoCard price={500} image={item6} />
          <PhotoCard price={100} image={item5} />
          <PhotoCard price={150} image={item4} />
          <PhotoCard price={1000} image={item3} />
          <PhotoCard price={600} image={item1} />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
