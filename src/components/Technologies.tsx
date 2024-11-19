import React, { useRef } from "react";
import { smallTechData, techData } from "@/constants/technologies";
import { motion } from "framer-motion";

// import Image from "next/image";
// import { FaReact, FaNodeJs } from "react-icons/fa";
// import { AiFillGithub } from "react-icons/ai";
// import { DiNpm } from "react-icons/di";
// import {
//   SiNextdotjs,
//   SiJavascript,
//   SiTypescript,
//   SiMongodb,
//   SiTailwindcss,
//   SiCss3,
//   SiNestjs,
//   SiExpress,
//   SiDocker,
//   SiHtml5,
//   SiMongoose,
// } from "react-icons/si";

// const techData1 = [
//   {
//     name: "React JS",
//     icon: (
//       <FaReact className=" w-24 h-24 text-[#61cdff] group-hover:scale-110 duration-300" />
//     ),
//   },

//   {
//     name: "Next Js",
//     icon: (
//       <SiNextdotjs className=" w-24 h-24 text-[#000000] border border-slate-100 rounded-full bg-white group-hover:scale-110 duration-300" />
//     ),
//   },
//   {
//     name: "Node JS",
//     icon: (
//       <FaNodeJs className=" w-24 h-24 text-[#4faf45] group-hover:scale-110 duration-300" />
//     ),
//   },
//   {
//     name: "React Native",
//     icon: (
//       <FaReact className=" w-24 h-24 text-[#61cdff] group-hover:scale-110 duration-300" />
//     ),
//   },
//   {
//     name: "Java Script",
//     icon: (
//       <SiJavascript className=" w-24 h-24 text-[#eede4c] group-hover:scale-110 duration-300" />
//     ),
//   },
//   {
//     name: "Type Script",
//     icon: (
//       <SiTypescript className=" w-24 h-24 text-[#61cdff] group-hover:scale-110 duration-300" />
//     ),
//   },
//   {
//     name: "Nest JS",
//     icon: (
//       <SiNestjs className=" w-24 h-24 text-[#d9224c] group-hover:scale-110 duration-300" />
//     ),
//   },
//   {
//     name: "Mongo DB",
//     icon: (
//       <SiMongodb className=" w-24 h-24 text-[#4faf45] group-hover:scale-110 duration-300" />
//     ),
//   },
//   {
//     name: "CSS",
//     icon: (
//       <SiCss3 className=" w-24 h-24 text-[#2c69fa] group-hover:scale-110 duration-300" />
//     ),
//   },
//   {
//     name: "Tailwind CSS",
//     icon: (
//       <SiTailwindcss className=" w-24 h-24 text-[#61cdff] group-hover:scale-110 duration-300" />
//     ),
//   },
// ];

// const smallTechData1 = [
//   {
//     name: "Express JS",
//     icon: (
//       <div>
//         <SiExpress className=" w-14 h-14 text-[#fff] group-hover:scale-150 duration-300" />
//       </div>
//     ),
//   },
//   {
//     name: "GitHub",
//     icon: (
//       <AiFillGithub className=" w-14 h-14 text-[#fff] group-hover:scale-150 duration-300" />
//     ),
//   },
//   {
//     name: "Docker",
//     icon: (
//       <SiDocker className=" w-14 h-14 text-[#119fed] group-hover:scale-150 duration-300" />
//     ),
//   },
//   {
//     name: "Redux toolkit",
//     icon: (
//       <Image
//         src={require("@/assets/technologies/redux.png")}
//         alt="vs-code"
//         className="w-10 h-10 group-hover:scale-150 duration-300"
//       />
//     ),
//   },
//   {
//     name: "Figma",
//     icon: (
//       <Image
//         src={require("@/assets/technologies/figma.png")}
//         alt="vs-code"
//         className="w-10 h-10 group-hover:scale-150 duration-300"
//       />
//     ),
//   },
//   {
//     name: "HTML 5",
//     icon: (
//       <SiHtml5 className=" w-14 h-14 text-[#e5532d] group-hover:scale-150 duration-300" />
//     ),
//   },
//   {
//     name: "NPM ",
//     icon: (
//       <DiNpm className=" w-14 h-14 text-[#cd3e3d] group-hover:scale-150 duration-300" />
//     ),
//   },
//   {
//     name: "Yarn",
//     icon: (
//       <Image
//         src={require("@/assets/yarn-logo.png")}
//         alt="vs-code"
//         className="w-10 h-10 group-hover:scale-150 duration-300"
//       />
//     ),
//   },
//   {
//     name: "Mongoose",
//     icon: (
//       <SiMongoose className=" w-14 h-14 text-[#8c0808] group-hover:scale-150 duration-300" />
//     ),
//   },
//   {
//     name: "VS code",
//     icon: (
//       <Image
//         src={require("@/assets/vscode.png")}
//         alt="vs-code"
//         className="w-10 h-10 group-hover:scale-150 duration-300"
//       />
//     ),
//   },
//   {
//     name: "Bootstrap",
//     icon: (
//       <Image
//         src={require("@/assets/bootstrap.png")}
//         alt="vs-code"
//         className="w-10 h-10 group-hover:scale-150 duration-300"
//       />
//     ),
//   },
// ];

const sectionHeadText =
  "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]";
const sectionSubText =
  "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider";

const Technologies = () => {
  const smallTechRef = useRef(null);
  return (
    <section
      id="technologies"
      className="w-full md:px-5 sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto "
    >
      <div>
        <p className={sectionSubText}>Skills</p>
        <h2 className={sectionHeadText}>Technologies</h2>
      </div>

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        These are the technologies, on which i have been working since my web
        development journy started. below i mentioned all my major technologies
        and some are miner technologies.
      </p>
      <div className="mt-5  grid sm:grid-cols-2 md:grid-cols-4  justify-items-center gap-14   ">
        {techData.map((item, idx) => (
          <Technology key={idx} name={item.name} icon={item.icon} />
        ))}
      </div>
      <div
        ref={smallTechRef}
        className="mt-10  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 justify-items-center gap-4 gap-y-10"
      >
        {smallTechData.map((item, idx) => (
          <TechnologySmall
            key={idx}
            name={item.name}
            icon={item.icon}
            reference={smallTechRef}
          />
        ))}
      </div>
    </section>
  );
};

export default Technologies;

const Technology = ({ name, icon }: { name: string; icon: any }) => {
  return (
    <>
      <div className="relative myHover group  h-[220px] w-[220px] rounded-[20px] sm:border-0 border  border-slate-800 ">
        <div className="hoverBox " />
        <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
          {icon}
          <h3 className="text-xl text-slate-50 mt-4">{name}</h3>
        </div>
      </div>
    </>
  );
};

interface ITechnologySmall {
  name: string;
  icon: any;
  reference: any;
}

const TechnologySmall = ({ name, icon, reference }: ITechnologySmall) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.2 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 100 }}
        className="relative mySmallHover group  h-[150px] w-[150px] rounded-[20px] shadow-[0_0_20px_blue] drop-shadow-[0_0_30px_blue]"
      >
        {/* <div className="hoverSmallBox " /> */}
        <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
          {icon}
          <h3 className="text-xs text-slate-50 mt-4   duration-300 text-center">
            {name}
          </h3>
        </div>
      </motion.div>
    </>
  );
};
