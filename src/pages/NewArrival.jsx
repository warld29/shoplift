import React from "react";
import Navbar from "../component/Navbar";
import Button from "../component/Button";
import model from "../assets/model.jpg";
import { Link } from "react-router-dom";

const NewArrival = ({ text }) => {
  return (
    <>
      <Navbar />
      <main className="h-[calc(100vh-100px)]  text-black w-full  bg-[#707070]">
        <div className="flex w-full h-full">
          <div className="border border-black w-[50%]">
            <div className="flex justify-center items-center w-full h-[70%]">
              <h1 className="font-light font-sans text-7xl py-4 ">
                Crafted to <br />
                seemlessly <br />
                blend fashion <br />
                with function.
              </h1>
            </div>

            <div className="w-[75%] h-[25%] flex justify-center mx-6">
              <Link to={"/product"}>
                <Button text={"Shop New Arrival"} />
              </Link>
            </div>
          </div>
          <div className="border border-black w-[50%] h-[100%]">
            <img
              className="w-full h-[100%] object-contain"
              src={model}
              alt=""
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default NewArrival;
