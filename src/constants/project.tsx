import Image from "next/image";
import React from "react";
import { FaReact } from "react-icons/fa";

import {
  SiNextdotjs,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiMui,
  SiTypescript,
  SiCss3,
} from "react-icons/si";

interface IProjectData {
  name: string;
  category: "FRONTEND" | "FULLSTACK" | "REACTNATIVE" | "REACTJS";
  liveLink: string;
  codeLink: string;
  img: any;
  techUsed: React.JSX.Element;
}

export const projectData: IProjectData[] = [
  {
    name: "Utkrist App",
    category: "FRONTEND",
    liveLink: "https://play.google.com/store/apps/details?id=com.utkrishtusssm.app",
    codeLink: "/",
    img: require("@/assets/projects/utk.png"),
    techUsed: (
      <div className="mt-2 flex gap-3 ">
        <FaReact className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
        <SiTypescript className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
        <SiJavascript className=" w-6 h-6 text-[#eede4c] hover:scale-125 duration-300" />
        <SiExpress className=" w-6 h-6 text-[#fff] hover:scale-125 duration-300" />
        <SiMongodb className=" w-6 h-6 text-[#4faf45] hover:scale-125 duration-300" />
        <SiTailwindcss className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
        <Image
          src={require("@/assets/technologies/redux.png")}
          alt="sanity"
          className="w-6 h-6 hover:scale-125 duration-300"
        />
      </div>
    ),
  },

  {
    name: "Water App",
    category: "FRONTEND",
    liveLink: "https://waterapp.littera.in/",
    codeLink: "/",
    img: require("@/assets/projects/water.png"),
    techUsed: (
      <div className="mt-2 flex gap-3 ">
        <FaReact className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
        <SiTypescript className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
        <SiJavascript className=" w-6 h-6 text-[#eede4c] hover:scale-125 duration-300" />
        <SiExpress className=" w-6 h-6 text-[#fff] hover:scale-125 duration-300" />
        <SiMongodb className=" w-6 h-6 text-[#4faf45] hover:scale-125 duration-300" />
        <SiTailwindcss className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
        <Image
          src={require("@/assets/technologies/google.png")}
          alt="sanity"
          className="w-6 h-6 hover:scale-125 duration-300"
        />
      </div>
    ),
  },
  // {
  //   name: "Tik Tok",
  //   category: "FULLSTACK",
  //   liveLink: "https://tiktik.theabhipatel.com/",
  //   codeLink: "https://github.com/codingwithcod/project_tiktok",
  //   img: require("@/assets/projects/mytiktik.png"),
  //   techUsed: (
  //     <div className="mt-2 flex gap-3 ">
  //       <SiNextdotjs className=" w-6 h-6 text-[#000000] border border-slate-100 rounded-full bg-white hover:scale-125 duration-300" />
  //       <SiTypescript className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
  //       <Image
  //         src={require("@/assets/technologies/sanity.png")}
  //         alt="sanity"
  //         className="w-6 h-6 hover:scale-125 duration-300"
  //       />
  //       <SiTailwindcss className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
  //       <Image
  //         src={require("@/assets/technologies/google.png")}
  //         alt="sanity"
  //         className="w-6 h-6 hover:scale-125 duration-300"
  //       />
  //     </div>
  //   ),
  // },
  // {
  //   name: "A1Agriculture",
  //   category: "FULLSTACK",
  //   liveLink: "https://a1agri.theabhipatel.com/",
  //   codeLink: "https://github.com/codingwithcod/project_a1_agri_nextjs",
  //   img: require("@/assets/projects/a1.png"),
  //   techUsed: (
  //     <div className="mt-2 flex gap-3 ">
  //       <SiNextdotjs className=" w-6 h-6 text-[#000000] border border-slate-100 rounded-full bg-white hover:scale-125 duration-300" />
  //       <SiJavascript className=" w-6 h-6 text-[#eede4c] hover:scale-125 duration-300" />
  //       <SiMongodb className=" w-6 h-6 text-[#4faf45] hover:scale-125 duration-300" />
  //       <SiTailwindcss className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
  //     </div>
  //   ),
  // },
  {
    name: "GofundHer",
    category: "FRONTEND",
    liveLink: "/",
    codeLink: "/",
    img: require("@/assets/projects/ecom_head.webp"),
    techUsed: (
      <div className="mt-2 flex gap-3 ">
        <SiNextdotjs className=" w-6 h-6 text-[#000000] border border-slate-100 rounded-full bg-white hover:scale-125 duration-300" />
        <SiJavascript className=" w-6 h-6 text-[#eede4c] hover:scale-125 duration-300" />
        <Image
          src={require("@/assets/technologies/sanity.png")}
          alt="sanity"
          className="w-6 h-6 hover:scale-125 duration-300"
        />
        <Image
          src={require("@/assets/technologies/stripe.png")}
          alt="stripe"
          className="w-6 h-6 hover:scale-125 duration-300"
        />
        <SiCss3 className=" w-6 h-6 text-[#2c69fa] hover:scale-125 duration-300" />
      </div>
    ),
  },
  // {
  //   name: "Ai Image",
  //   category: "FULLSTACK",
  //   liveLink: "https://ai-imageg.vercel.app/",
  //   codeLink: "https://github.com/codingwithcod/project_ai_image/",
  //   img: require("@/assets/projects/AI-image.png"),
  //   techUsed: (
  //     <div className="mt-2 flex gap-3 ">
  //       <FaReact className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
  //       <SiJavascript className=" w-6 h-6 text-[#eede4c] hover:scale-125 duration-300" />
  //       <SiExpress className=" w-6 h-6 text-[#fff] hover:scale-125 duration-300" />
  //       <SiMongodb className=" w-6 h-6 text-[#4faf45] hover:scale-125 duration-300" />
  //       <SiTailwindcss className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
  //     </div>
  //   ),
  // },
  // {
  //   name: "Youtube clone",
  //   category: "FRONTEND",
  //   liveLink: "https://youtube.theabhipatel.com/",
  //   codeLink: "https://github.com/codingwithcod/project_youtube_clone_app",
  //   img: require("@/assets/projects/react-clone.png"),
  //   techUsed: (
  //     <div className="mt-2 flex gap-3 ">
  //       <FaReact className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
  //       <SiJavascript className=" w-6 h-6 text-[#eede4c] hover:scale-125 duration-300" />
  //       <Image
  //         src={require("@/assets/technologies/rapid-api.png")}
  //         alt="rapid-api"
  //         className="w-6 h-6 hover:scale-125 duration-300"
  //       />
  //       <SiMui className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
  //     </div>
  //   ),
  // },
  {
    name: "Portfolio",
    category: "FRONTEND",
    liveLink: "/",
    codeLink: "",
    img: require("@/assets/projects/abhi-portfolio.png"),
    techUsed: (
      <div className="mt-2 flex gap-3 ">
        <SiNextdotjs className=" w-6 h-6 text-[#000000] border border-slate-100 rounded-full bg-white hover:scale-125 duration-300" />
        <SiTypescript className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
        <SiTailwindcss className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
      </div>
    ),
  },
  // {
  //   name: "WhatsApp clone",
  //   category: "REACTNATIVE",
  //   liveLink: "/downloads/whatchat.apk",
  //   codeLink: "https://github.com/TheAbhiPatel/rn_what_chat",
  //   img: require("@/assets/projects/whatchat.jpg"),
  //   techUsed: (
  //     <div className="mt-2 flex gap-3 items-center ">
  //       <FaReact className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
  //       <SiTypescript className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
  //       <Image
  //         src={require("@/assets/technologies/google.png")}
  //         alt="sanity"
  //         className="w-6 h-6 hover:scale-125 duration-300"
  //       />
  //       <Image
  //         src={require("@/assets/technologies/firebase.png")}
  //         alt="sanity"
  //         className="w-9 h-9 hover:scale-125 duration-300"
  //       />
  //     </div>
  //   ),
  // },
  // {
  //   name: "Instagram clone",
  //   category: "REACTNATIVE",
  //   liveLink: "/downloads/instagram.apk",
  //   codeLink: "https://github.com/codingwithcod/rn_instagram",
  //   img: require("@/assets/projects/instagram.jpg"),
  //   techUsed: (
  //     <div className="mt-2 flex gap-3 items-center ">
  //       <FaReact className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
  //       <SiTypescript className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
  //       <Image
  //         src={require("@/assets/technologies/google.png")}
  //         alt="sanity"
  //         className="w-6 h-6 hover:scale-125 duration-300"
  //       />
  //       <Image
  //         src={require("@/assets/technologies/firebase.png")}
  //         alt="sanity"
  //         className="w-9 h-9 hover:scale-125 duration-300"
  //       />
  //       <Image
  //         src={require("@/assets/technologies/shopify.png")}
  //         alt="sanity"
  //         className="w-8 h-8 hover:scale-125 duration-300"
  //       />
  //     </div>
  //   ),
  // },
  {
    name: "Aj Finance",
    category: "FRONTEND",
    liveLink: "https://play.google.com/store/apps/details?id=com.ajfinanceinindia.app",
    codeLink: "/",
    img: require("@/assets/projects/pdf-reader.jpg"),
    techUsed: (
      <div className="mt-2 flex gap-3 items-center ">
        <FaReact className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
        <SiTypescript className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
        <Image
          src={require("@/assets/technologies/google.png")}
          alt="google"
          className="w-6 h-6 hover:scale-125 duration-300"
        />
        <Image
          src={require("@/assets/technologies/firebase.png")}
          alt="firebase"
          className="w-9 h-9 hover:scale-125 duration-300"
        />
        <Image
          src={require("@/assets/technologies/shopify.png")}
          alt="shopify"
          className="w-8 h-8 hover:scale-125 duration-300"
        />
      </div>
    ),
  },
  // {
  //   name: "Giriraj Mart",
  //   category: "REACTNATIVE",
  //   liveLink: "/downloads/pdf-reader.apk",
  //   codeLink: "https://github.com/TheAbhiPatel/",
  //   img: require("@/assets/projects/giriraj-mart.png"),
  //   techUsed: (
  //     <div className="mt-2 flex gap-3 items-center ">
  //       <FaReact className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
  //       <SiTypescript className=" w-6 h-6 text-[#61cdff] hover:scale-125 duration-300" />
  //       <Image
  //         src={require("@/assets/technologies/redux.png")}
  //         alt="sanity"
  //         className="w-6 h-6 hover:scale-125 duration-300"
  //       />
  //       <Image
  //         src={require("@/assets/technologies/shopify.png")}
  //         alt="shopify-restyle"
  //         title="shopify-restyle"
  //         className="w-8 h-8 hover:scale-125 duration-300"
  //       />
  //     </div>
  //   ),
  // },
];
