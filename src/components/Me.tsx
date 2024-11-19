import Image from "next/image";
import React from "react";

const Me = () => {
  return (
    <div
      id="#contact"
      className=" mt-20 min-h-[400px]   flex justify-center items-center relative  overflow-hidden"
    >
      <Image
        src={require("../assets/round.svg")}
        width={800}
        alt="round"
        className="absolute animate-spin-slow"
      />
      {/* ======================================= */}
      <div>
        <h2 className="my-text text-[30px] sm:text-[40px] md:text-[80px] font-bold ">
          
          Atul Tiwari
        </h2>
        <h3 className="text-[20px] md:text-[40px] text-center text-secondary ">
          {" "}
          &lt; A React js Developer ! &gt;
        </h3>
      </div>
    </div>
  );
};

export default Me;
