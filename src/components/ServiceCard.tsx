import React from "react";
import { motion } from "framer-motion";
import ApiIcon from "@/assets/api.png";

import { fadeIn } from "../utils/motion";
import Image from "next/image";

interface IServiceCard {
  index: number;
  title: string;
  icon: any;
}

const ServiceCard = ({ index, title, icon }: IServiceCard) => (
  <div className="w-full xs:w-[250px] sm:w-[210px] ">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.5)}
      className="w-full  p-[1px] rounded-[20px] "
    >
      <div className="bg-[#161b22] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <Image
          src={icon}
          alt={title}
          width={100}
          className="w-18 h-18 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

export default ServiceCard;
