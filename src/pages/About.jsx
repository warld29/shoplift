import React from "react";
import Navbar from "../component/Navbar";
import modelbgg from "../assets/modelbgg.jpg";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[calc(100vh-100px)]  text-black w-full  bg-slate-200 relative flex items-center justify-center">
        <img className="h-full w-full object-cover" src={modelbgg} alt="" />
        <div className="absolute left-0 px-9">
          <div className="border-2 borer-white w-[500px] h-[500px] flex justify-center items-center mx-5">
            <h2 className="text-white font-semibold font-serif text-6xl text-center">
              Style. <br /> <br /> Technical. <br /> <br />
              Innovative.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
