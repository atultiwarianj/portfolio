import React from "react";

import Image from "next/image";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { DiNpm } from "react-icons/di";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiCss3,
  SiNestjs,
  SiExpress,
  SiDocker,
  SiHtml5,
  SiMongoose,
  SiAxios,
} from "react-icons/si";

export const techData = [
  {
    name: "React JS",
    icon: (
      <FaReact className=" w-24 h-24 text-[#61cdff] group-hover:scale-110 duration-300" />
    ),
  },

  {
    name: "Next Js",
    icon: (
      <SiNextdotjs className=" w-24 h-24 text-[#000000] border border-slate-100 rounded-full bg-white group-hover:scale-110 duration-300" />
    ),
  },
  // {
  //   name: "Node JS",
  //   icon: (
  //     <FaNodeJs className=" w-24 h-24 text-[#4faf45] group-hover:scale-110 duration-300" />
  //   ),
  // },
  // {
  //   name: "React Native",
  //   icon: (
  //     <FaReact className=" w-24 h-24 text-[#61cdff] group-hover:scale-110 duration-300" />
  //   ),
  // },
  {
    name: "Java Script",
    icon: (
      <SiJavascript className=" w-24 h-24 text-[#eede4c] group-hover:scale-110 duration-300" />
    ),
  },
  {
    name: "Type Script",
    icon: (
      <SiTypescript className=" w-24 h-24 text-[#61cdff] group-hover:scale-110 duration-300" />
    ),
  },
  {
    name: "Next JS",
    icon: (
      <SiNestjs className=" w-24 h-24 text-[#d9224c] group-hover:scale-110 duration-300" />
    ),
  },
  // {
  //   name: "Mongo DB",
  //   icon: (
  //     <SiMongodb className=" w-24 h-24 text-[#4faf45] group-hover:scale-110 duration-300" />
  //   ),
  // },
  {
    name: "CSS",
    icon: (
      <SiCss3 className=" w-24 h-24 text-[#2c69fa] group-hover:scale-110 duration-300" />
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <SiTailwindcss className=" w-24 h-24 text-[#61cdff] group-hover:scale-110 duration-300" />
    ),
  },
  {
    name: "Material UI",
    icon: (
      <SiTailwindcss className=" w-24 h-24 text-[#61cdff] group-hover:scale-110 duration-300" />
    ),
  },
];

export const smallTechData = [
  {
    name: "Express JS",
    icon: (
      <div>
        <SiExpress className=" w-14 h-14 text-[#fff] group-hover:scale-150 duration-300" />
      </div>
    ),
  },
  {
    name: "GitHub",
    icon: (
      <AiFillGithub className=" w-14 h-14 text-[#fff] group-hover:scale-150 duration-300" />
    ),
  },
  {
    name: "Docker",
    icon: (
      <SiDocker className=" w-14 h-14 text-[#119fed] group-hover:scale-150 duration-300" />
    ),
  },
  {
    name: "Redux toolkit",
    icon: (
      <Image
        src={require("@/assets/technologies/redux.png")}
        alt="vs-code"
        className="w-10 h-10 group-hover:scale-150 duration-300"
      />
    ),
  },
  {
    name: "Figma",
    icon: (
      <Image
        src={require("@/assets/technologies/figma.png")}
        alt="vs-code"
        className="w-10 h-10 group-hover:scale-150 duration-300"
      />
    ),
  },
  {
    name: "HTML 5",
    icon: (
      <SiHtml5 className=" w-14 h-14 text-[#e5532d] group-hover:scale-150 duration-300" />
    ),
  },
  {
    name: "NPM ",
    icon: (
      <DiNpm className=" w-14 h-14 text-[#cd3e3d] group-hover:scale-150 duration-300" />
    ),
  },
  {
    name: "Yarn",
    icon: (
      <Image
        src={require("@/assets/yarn-logo.png")}
        alt="vs-code"
        className="w-10 h-10 group-hover:scale-150 duration-300"
      />
    ),
  },
  // {
  //   name: "Mongoose",
  //   icon: (
  //     <SiMongoose className=" w-14 h-14 text-[#8c0808] group-hover:scale-150 duration-300" />
  //   ),
  // },
  {
    name: "Axios",
    icon: (
      <SiAxios className=" w-14 h-14 text-[#5f30e5] group-hover:scale-150 duration-300" />
    ),
  },
  {
    name: "VS code",
    icon: (
      <Image
        src={require("@/assets/vscode.png")}
        alt="vs-code"
        className="w-10 h-10 group-hover:scale-150 duration-300"
      />
    ),
  },
  {
    name: "Bootstrap",
    icon: (
      <Image
        src={require("@/assets/bootstrap.png")}
        alt="vs-code"
        className="w-10 h-10 group-hover:scale-150 duration-300"
      />
    ),
  },
];
