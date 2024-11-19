import React from "react";

import Link from "next/link";
import Image from "next/image";

const heroHeadText =
  "font-black text-white lg:text-[70px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2";
const heroSubText =
  "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[20px] lg:leading-[40px]";

const Hero = () => {
  return (
    <section className="relative w-full h-screen md:min-h-[100vh]">
      <div className="flex  flex-wrap md:flex-row w-full h-full">
        {/* ----------> Left Side <-------- */}
        <div className="h-[40%] sm:h-[50%] w-full md:h-full md:w-[50%] p-4 bg-red-5000 justify-center">
          <div className=" w-full h-full   flex justify-center items-end md:items-center relative  overflow-hidden bg-blue-4000">
            <Image
              src={require("../assets/round.svg")}
              width={800}
              alt="round"
              className="absolute animate-spin-slow h-[80%] w-[50%] "
            />
            {/* ======================================= */}
            <div>
              <h2 className="my-text text-[2.5rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold leading-none">
                <span> The</span> <br />
                Atul Tiwari
              </h2>
              <h1 className="text-[1.2rem] md:text-[1.6rem] lg:text-[2rem] text-center text-secondary ">
                &lt; A ReactJS / NextJS Developer ! &gt;
              </h1>
              <Link href={"#about"}>
                <button className="p-2 px-5 mt-5 bg-blue-500 rounded-full  cursor-pointer">
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* ----------> Right Side <-------- */}
        <div className="h-[50%] w-full md:h-full  md:w-[50%] p-4 flex justify-center items-start sm:items-center bg-blue-5000">
          <h3 className="font-poppins text-white  font-bold md:text-[3rem]  lg:text-[3.5rem] md:leading-[3.5rem] lg:leading-[4.3rem] text-[40px] leading-[46px] tracking-[-0.5%] text-left">
            Turning <span className="my-text font-extrabold">Concepts</span>{" "}
            <br /> into Functional <br />{" "}
            <span className="my-text font-extrabold">Web Experiences</span>{" "}
            <br />
            from <br className="sm:hidden" />
            <span className="my-text2 font-extrabold">Front to Back</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
