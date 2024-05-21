import React from "react";

const Button = ({ text }) => {
  return (
    <>
      <button className="h-[4rem] w-[13rem] bg-black rounded-md text-white font-bold font-serif text-xl cursor-pointer hover:bg-white hover:text-black transition-all ease">
        {text}
      </button>
    </>
  );
};

export default Button;
