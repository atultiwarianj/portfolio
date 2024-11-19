import React from "react";
import { motion } from "framer-motion";

import { services } from "../constants";
import SectionWrapper from "../SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import ServiceCard from "./ServiceCard";

const sectionHeadText =
  "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]";
const sectionSubText =
  "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider";

interface IServiceCard {
  index: number;
  title: string;
  icon: any;
}

const About = () => {
  return (
    <>
      <div className="w-full  ">
        <motion.div variants={textVariant()}>
          <p className={sectionSubText}>Introduction</p>
          <h2 className={sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I am a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React Js, Next js.
           I am a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let&apos;s work together to bring your ideas to
          life!
        </motion.p>

        <div className="mt-20 flex justify-center sm:justify-normal flex-wrap gap-5">
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
