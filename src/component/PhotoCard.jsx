import React from "react";
import Button from "../component/Button";

const PhotoCard = ({ image, price }) => {
  return (
    <div className="h-[700px] w-[28%] hover:shadow-2xl bg-slate-100">
      <img className="w-full h-[80%] object-cover" src={image} alt="" />
      <div className="flex justify-between items-center py-5 px-1">
        <h2 className="font-bold text-3xl font-sans">${price}</h2>
        <Button text={"Add to cart"} />
      </div>
    </div>
  );
};

export default PhotoCard;
