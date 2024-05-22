import React from "react";

const Headline = ({ text1, text2, text3 }) => {
  return (
    <>
      <div className="h-[55px] w-full px-5 bg-black flex items-center justify-between font-serif">
        <p className="text-white font-light text-l">{text1}</p>
        <p className="text-white font-light text-l">{text2}</p>
        <p className="text-white font-light text-l">{text3}</p>
      </div>
    </>
  );
};

export default Headline;
