import Image from "next/image";
import React, { FC, useState } from "react";
import { projectData } from "@/constants/project";
import { AiFillGithub, AiFillHome, AiFillAndroid } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { FaReact, FaDownload } from "react-icons/fa";
import Link from "next/link";

// import Image from "next/image";
// import React from "react";
// import { FaReact } from "react-icons/fa";

// import {
//   SiNextdotjs,
//   SiJavascript,
//   SiMongodb,
//   SiTailwindcss,
//   SiExpress,
//   SiMui,
//   SiTypescript,
//   SiCss3,
// } from "react-icons/si";

// const projectData1 = [
//   {
//     name: "A1Agriculture",
//     liveLink: "https://a1agri-firtst-nextjs.vercel.app/",
//     codeLink: "https://github.com/codingwithcod/project_a1_agri_nextjs",
//     img: require("@/assets/projects/a1.png"),
//     techUsed: (
//       <div className="mt-2 flex gap-3 ">
//         <SiNextdotjs className=" w-6 h-6 text-[#000000] border border-slate-100 rounded-full bg-white hover:scale-125 duration-300" />
//         <SiJavascript className=" w-6 h-6 text-[#eede4c] hover:scale-125 duration-300" />
//         <SiMongodb className=" w-6 h-6 text-[#4faf45] hover:scale-125 duration-300" />
//         <SiTailwindcss className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
//       </div>
//     ),
//   },
//   {
//     name: "Blogger",
//     liveLink: "https://ablogger.vercel.app",
//     codeLink: "https://github.com/codingwithcod/blogger_ts",
//     img: require("@/assets/projects/blogger.png"),
//     techUsed: (
//       <div className="mt-2 flex gap-3 ">
//         <FaReact className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
//         <SiTypescript className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
//         <SiJavascript className=" w-6 h-6 text-[#eede4c] hover:scale-125 duration-300" />
//         <SiExpress className=" w-6 h-6 text-[#fff] hover:scale-125 duration-300" />
//         <SiMongodb className=" w-6 h-6 text-[#4faf45] hover:scale-125 duration-300" />
//         <SiTailwindcss className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
//       </div>
//     ),
//   },
//   {
//     name: "Tik Tok",
//     liveLink: "https://mytiktik.vercel.app/",
//     codeLink: "https://github.com/codingwithcod/project_tiktok",
//     img: require("@/assets/projects/mytiktik.png"),
//     techUsed: (
//       <div className="mt-2 flex gap-3 ">
//         <SiNextdotjs className=" w-6 h-6 text-[#000000] border border-slate-100 rounded-full bg-white hover:scale-125 duration-300" />
//         <SiTypescript className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
//         <Image
//           src={require("@/assets/technologies/sanity.png")}
//           alt="sanity"
//           className="w-6 h-6 hover:scale-125 duration-300"
//         />
//         <SiTailwindcss className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
//       </div>
//     ),
//   },
//   {
//     name: "Ecommerce",
//     liveLink: "https://ecommerce-headphone-pi.vercel.app",
//     codeLink: "https://github.com/codingwithcod/project_ecommerce_headphone",
//     img: require("@/assets/projects/ecom_head.png"),
//     techUsed: (
//       <div className="mt-2 flex gap-3 ">
//         <SiNextdotjs className=" w-6 h-6 text-[#000000] border border-slate-100 rounded-full bg-white hover:scale-125 duration-300" />
//         <SiJavascript className=" w-6 h-6 text-[#eede4c] hover:scale-125 duration-300" />
//         <Image
//           src={require("@/assets/technologies/sanity.png")}
//           alt="sanity"
//           className="w-6 h-6 hover:scale-125 duration-300"
//         />
//         <Image
//           src={require("@/assets/technologies/stripe.png")}
//           alt="stripe"
//           className="w-6 h-6 hover:scale-125 duration-300"
//         />
//         <SiCss3 className=" w-6 h-6 text-[#2c69fa] hover:scale-125 duration-300" />
//       </div>
//     ),
//   },
//   {
//     name: "Ai Image",
//     liveLink: "https://ai-imageg.vercel.app/",
//     codeLink: "https://github.com/codingwithcod/project_ai_image/",
//     img: require("@/assets/projects/AI-image.png"),
//     techUsed: (
//       <div className="mt-2 flex gap-3 ">
//         <FaReact className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
//         <SiJavascript className=" w-6 h-6 text-[#eede4c] hover:scale-125 duration-300" />
//         <SiExpress className=" w-6 h-6 text-[#fff] hover:scale-125 duration-300" />
//         <SiMongodb className=" w-6 h-6 text-[#4faf45] hover:scale-125 duration-300" />
//         <SiTailwindcss className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
//       </div>
//     ),
//   },
//   {
//     name: "Youtube clone",
//     liveLink: "https://mymate.vercel.app",
//     codeLink: "https://github.com/codingwithcod/project_youtube_clone_app",
//     img: require("@/assets/projects/react-clone.png"),
//     techUsed: (
//       <div className="mt-2 flex gap-3 ">
//         <FaReact className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
//         <SiJavascript className=" w-6 h-6 text-[#eede4c] hover:scale-125 duration-300" />
//         <Image
//           src={require("@/assets/technologies/rapid-api.png")}
//           alt="rapid-api"
//           className="w-6 h-6 hover:scale-125 duration-300"
//         />
//         <SiMui className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
//       </div>
//     ),
//   },
//   {
//     name: "ChatBot Ai",
//     liveLink: "https://mychat-bot.vercel.app",
//     codeLink: "https://github.com/codingwithcod/project_chatbot_openai",
//     img: require("@/assets/projects/mychat-bot.png"),
//     techUsed: (
//       <div className="mt-2 flex gap-3 ">
//         <SiJavascript className=" w-6 h-6 text-[#eede4c] hover:scale-125 duration-300" />
//         <SiExpress className=" w-6 h-6 text-[#fff] hover:scale-125 duration-300" />
//         <SiCss3 className=" w-6 h-6 text-[#2c69fa] hover:scale-125 duration-300" />
//       </div>
//     ),
//   },
//   {
//     name: "Portfolio",
//     liveLink: "https://theabhipatel.vercel.app/",
//     codeLink: "https://github.com/codingwithcod/theabhipatel_portfolio_ts",
//     img: require("@/assets/projects/abhi-portfolio.png"),
//     techUsed: (
//       <div className="mt-2 flex gap-3 ">
//         <SiNextdotjs className=" w-6 h-6 text-[#000000] border border-slate-100 rounded-full bg-white hover:scale-125 duration-300" />
//         <SiTypescript className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
//         <SiTailwindcss className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
//       </div>
//     ),
//   },
// ];

const sectionHeadText =
  "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]";
const sectionSubText =
  "sm:text-sm text-xs text-secondary uppercase tracking-wider";

export enum ECategories {
  ALL = "ALL",
  FRONTEND = "FRONTEND",
  FULLSTACK = "FULLSTACK",
  REACTNATIVE = "REACTNATIVE",
}

const Projects = () => {
  const [projects, setProjects] = useState(projectData);
  const [selectedCategory, setSelectedCategory] = useState<ECategories>(
    ECategories.ALL
  );

  const handleSetCategory = (category: ECategories) => {
    setSelectedCategory(category);
    if (category === ECategories.ALL) {
      setProjects(projectData);
    } else {
      const filteredProject = projectData.filter(
        (item) => item.category === category
      );
      setProjects(filteredProject);
    }
  };

  /** --- styling category bottom border --- */
  const selectedAll = `w-full h-[2px] sm:h-[3px]    ${
    selectedCategory === "ALL"
      ? "bg-gradient-to-r from-[#3896f4] from-2.34% to-100.78% to-[#9343e3]"
      : "bg-[#0d1117]"
  }  `;
  const selectedFrontend = `w-full h-[2px] sm:h-[3px] ${
    selectedCategory === "FRONTEND"
      ? "bg-gradient-to-r from-[#3896f4] to-[#9343e3]"
      : "bg-[#0d1117]"
  }  `;
  const selectedFullstack = `w-full h-[2px] sm:h-[3px] ${
    selectedCategory === "FULLSTACK"
      ? "bg-gradient-to-r from-[#3896f4] to-[#9343e3]"
      : "bg-[#0d1117]"
  }  `;
  const selectedReactNative = `w-full h-[2px] sm:h-[3px]  ${
    selectedCategory === "REACTNATIVE"
      ? "bg-gradient-to-r from-[#3896f4] to-[#9343e3]"
      : "bg-[#0d1117]"
  }  `;

  return (
    <section
      id="projects"
      className="w-full md:px-5 sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto "
    >
      <div>
        <div>
          <p className={sectionSubText}>Skills</p>
          <h2 className={sectionHeadText}>Projects</h2>
        </div>

        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Check out my projects using the latest tech like React.js
        , Next.js, TypeScript, and Node.js. Each one shows my
          skills in building high-quality and efficient solutions.
        </p>
      </div>
      {/* ----------> Project Category wise  <---------- */}
      <div className="w-full px-10 mt-3  justify-between  flex border-b border-slate-700">
        <div onClick={() => handleSetCategory(ECategories.ALL)}>
          {/* <AiFillHome className="text-xl" /> */}
          <div className="flex  items-center h-12 gap-3 cursor-pointer ">
            <Image
              src={require("@/assets/projects/category/all.png")}
              alt="all-menu"
              className="h-9 w-9 brightness-[10]"
              title="All Project"
            />
            <span className="hidden sm:block text-sm lg:text-lg font-bold ">
              All Projects
            </span>
          </div>
          <div className={selectedAll} />
        </div>
        <div onClick={() => handleSetCategory(ECategories.FRONTEND)}>
          <div className="flex  items-center h-12 gap-3 cursor-pointer ">
            <Image
              src={require("@/assets/projects/category/web.png")}
              alt="frontend"
              className="h-5 w-5 invert"
            />
            <span className="hidden sm:block text-sm lg:text-lg font-bold">
              Frontent Projects
            </span>
          </div>
          <div className={selectedFrontend} />
        </div>
        <div onClick={() => handleSetCategory(ECategories.FULLSTACK)}>
          <div className="flex  items-center h-12 gap-3 cursor-pointer ">
            <Image
              src={require("@/assets/projects/category/api.png")}
              alt="full-stack"
              className="h-8 w-8 invert"
            />
            <span className="hidden sm:block text-sm lg:text-lg font-bold">
              Fullstack Projects
            </span>
          </div>
          <div className={selectedFullstack} />
        </div>
        <div onClick={() => handleSetCategory(ECategories.REACTNATIVE)}>
          <div className="flex  items-center h-12 gap-3 cursor-pointer ">
            <Image
              src={require("@/assets/projects/category/mobile-app.png")}
              alt="react-native"
              className="h-8 w-8 invert"
            />
            <span className="hidden sm:block text-sm lg:text-lg font-bold">
              React Native Apps
            </span>
          </div>
          <div className={selectedReactNative} />
        </div>
      </div>
      {/* ----------> Project card maping  <---------- */}
      <div className="mt-10 mx-2 sm:mx-8  md:mx-10 grid grid-cols-1  md:grid-cols-2 justify-items-center justify-center items-center gap-14 ">
        {projects.map((item, idx) => {
          if (item.category !== ECategories.REACTNATIVE) {
            return (
              <Project
                key={idx}
                name={item.name}
                techUsed={item.techUsed}
                liveLink={item.liveLink}
                codeLink={item.codeLink}
                img={item.img}
              />
            );
          } else {
            return (
              <ProjectNative
                key={idx}
                name={item.name}
                techUsed={item.techUsed}
                liveLink={item.liveLink}
                codeLink={item.codeLink}
                img={item.img}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default Projects;

interface IProjectProps {
  name: string;
  liveLink: string;
  codeLink: string;
  techUsed: React.ReactNode;
  img: string;
}

/** --- Project card for Web application --- */
const Project: FC<IProjectProps> = ({
  name,
  liveLink,
  codeLink,
  techUsed,
  img,
}) => {
  return (
    <div className="bg-[#161b22] shadow-2xl   w-[22rem]  sm:w-[24rem] md:w-[22rem] lg:w-[25rem]  relative overflow-hidden  cursor-pointer rounded-md">
      <div className="h-[250px] bg-cover">
        <Image
          src={img}
          alt="project-a1"
          width={800}
          className=" object-fill object-center w-full h-full block "
        />
      </div>
      {/* <div className="h-[10px] md:h-[0px] bg-red-500"></div> */}
      <div className=" bg-[#161b22] p-3  duration-300 rounded-t-2xl px-6">
        <div className="flex justify-between items-center">
          <h3 className="text-[#D0DFFF] font-semibold  md:text-2xl   text-xl">
            {name}
          </h3>
          <button className="p-[0.4rem] px-4 text-sm border text-secondary  border-gray-600 hover:border-gray-700 hover:text-gray-600 rounded-full duration-300">
            View More
          </button>
        </div>
        <div className="mt-3">
          <p className={sectionSubText}>Tech Used</p>
          {techUsed}
        </div>

        <div className="mt-8 flex justify-between">
          <Link href={liveLink} target="_blank">
            <button className="p-[0.4rem] w-28 border text-secondary border-gray-600 hover:border-gray-700 hover:text-gray-600 rounded-full flex justify-around items-center group duration-300 ">
              <GoDotFill className="glowing-live w-4 h-4 text-green-600 group-hover:text-green-800  group-hover:bg-green-800  duration-300 p-0 bg-green-600" />
              <span>Live</span>
            </button>
          </Link>
          <Link href={codeLink} target="_blank">
            <button className="p-[0.4rem] w-28 border  border-gray-600  text-secondary hover:border-gray-700 hover:text-gray-600 rounded-full flex justify-around items-center duration-300 group">
              <AiFillGithub className=" w-4 h-4 text-secondary group-hover:text-gray-600 duration-300" />
              <span className="">Code</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

/** --- Project card for React native --- */
const ProjectNative: FC<IProjectProps> = ({
  name,
  liveLink,
  codeLink,
  techUsed,
  img,
}) => {
  return (
    <div className="bg-[#161b22] shadow-2xl   w-[22rem]  sm:w-[24rem] md:w-[22rem] lg:w-[25rem]  relative overflow-hidden  cursor-pointer rounded-md">
      <div className="h-[250px] bg-cover">
        <Image
          src={img}
          alt="project-a1"
          width={800}
          className=" object-fill object-center w-full h-full block "
        />
      </div>
      {/* <div className="h-[10px] md:h-[0px] bg-red-500"></div> */}
      <div className=" bg-[#161b22] p-3  duration-300 rounded-t-2xl px-6">
        <div className="flex justify-between items-center">
          <h3 className="text-[#D0DFFF] font-semibold  md:text-2xl   text-xl">
            {name}
          </h3>
          <button className="p-[0.4rem] px-4 text-sm border text-secondary  border-gray-600 hover:border-gray-700 hover:text-gray-600 rounded-full duration-300">
            View More
          </button>
        </div>
        <div className="mt-3">
          <p className={sectionSubText}>Tech Used</p>
          {techUsed}
        </div>

        <div className="mt-8 flex justify-between">
          <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + liveLink}>
            <button className="p-[0.4rem] w-36 border text-secondary border-gray-600 hover:border-gray-700 hover:text-gray-600 rounded-full flex justify-around items-center group duration-300 ">
              <FaDownload className="" />

              <span>Download</span>
            </button>
          </Link>
          <Link href={codeLink} target="_blank">
            <button className="p-[0.4rem] w-28 border  border-gray-600  text-secondary hover:border-gray-700 hover:text-gray-600 rounded-full flex justify-around items-center duration-300 group">
              <AiFillGithub className=" w-4 h-4 text-secondary group-hover:text-gray-600 duration-300" />
              <span className="">Code</span>
            </button>
          </Link>
        </div>
        <div className="flex items-center mt-3 gap-2 text-secondary  ">
          <span className="text-red-500">* </span>
          <span>
            <AiFillAndroid className="" />
          </span>
          Download Android app only
        </div>
      </div>
    </div>
  );
};
