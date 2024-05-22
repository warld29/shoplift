import React from "react";
import Navbar from "../component/Navbar";
import Headline from "../component/Headline";

const Studio = ({ text1, text2, text3 }) => {
  return (
    <>
      <Navbar />
      <div className="h-[calc(100vh-100px)]">
        <Headline
          text1={"LOOK BETTER, WEAR COMFORTABLE ACTIVE WEAR"}
          text2={"LOOK BETTER, WEAR COMFORTABLE ACTIVE WEAR"}
          text3={"LOOK BETTER, WEAR COMFORTABLE ACTIVE WEAR"}
        />

        <div className="w-full h-[95%] flex">
          <div className="w-[50%] h-[100%] bg-blue-200"></div>
          <div className="w-[50%] h-[100%] bg-green-200"></div>
        </div>
      </div>
    </>
  );
};

export default Studio;
