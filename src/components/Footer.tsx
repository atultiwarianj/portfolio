import Link from "next/link";
import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { TbMailFilled } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full ">
      <div className="px-5 sm:px-20 border-t border-b border-slate-800 flex justify-between flex-wrap">
        <div className="flex py-10 justify-between w-[60%] gap-y-4 flex-wrap ">
          {/* -------> Navigation Link <---------- */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold  ">Navigation</h4>
            <Link href={"/"} className="text-[#D0DFFF] text-sm">
              Home
            </Link>
            <Link href={"/#about"} className="text-[#D0DFFF] text-sm">
              About
            </Link>
            <Link href={"/#projects"} className="text-[#D0DFFF] text-sm">
              Experience
            </Link>
            <Link href={"/#projects"} className="text-[#D0DFFF] text-sm">
              Projects
            </Link>
            <Link href={"/#contact"} className="text-[#D0DFFF] text-sm">
              Contact
            </Link>
          </div>
          {/* ------->  Projects <---------- */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold ">Projects</h4>
            <div className="flex gap-10">
              <div className="flex flex-col gap-2 ">
                <Link
                  href={"/"}
                  className="text-[#D0DFFF] text-sm"
                  target="_theatultiwari"
                >
                  GofundHer
                </Link>
                <Link
                  href={"https://play.google.com/store/apps/details?id=com.ajfinanceinindia.app"}
                  className="text-[#D0DFFF] text-sm"
                  target="_theatultiwari"
                >
                  AJ Finance
                </Link>
                <Link
                  href={"https://play.google.com/store/apps/details?id=com.utkrishtusssm.app"}
                  className="text-[#D0DFFF] text-sm"
                  target="_theatultiwari"
                >
                  Utkrist User Panel
                </Link>
                <Link
                  href={"https://waterapp.littera.in/"}
                  className="text-[#D0DFFF] text-sm"
                  target="_theatultiwari"
                >
                  Water app
                </Link>
                <Link
                  href={"/"}
                  className="text-[#D0DFFF] text-sm"
                  target="_theatultiwari"
                >
                  Portfolio
                </Link>
              </div>
              <div className="flex flex-col gap-2 ">
                {/* <Link
                  href={"/"}
                  className="text-[#D0DFFF] text-sm"
                  target="_theatultiwari"
                >
                  EMS System
                </Link> */}
                {/* <Link
                  href={"https://blogger.theabhipatel.com/"}
                  className="text-[#D0DFFF] text-sm"
                  target="_theabhipatel"
                >
                  Blogger
                </Link> */}
              </div>
            </div>
          </div>
          {/* -------> React Native Projects <---------- */}
          {/* <div className="flex flex-col gap-2">
            <h4 className="font-bold  ">React Native</h4>
            <Link
              href={"https://github.com/theabhipatel/rn_what_chat"}
              className="text-[#D0DFFF] text-sm"
              target="_theabhipatel"
            >
              WhatsApp Clone
            </Link>
            <Link
              href={"https://github.com/codingwithcod/rn_instagram"}
              className="text-[#D0DFFF] text-sm"
              target="_theabhipatel"
            >
              Instagram Clone
            </Link>
            <Link
              href={"https://github.com/TheAbhiPatel/rn_pdf_reader"}
              className="text-[#D0DFFF] text-sm"
              target="_theabhipatel"
            >
              PDF Reader
            </Link>
            <Link
              href={"https://github.com/TheAbhiPatel/rn_calculator_app"}
              className="text-[#D0DFFF] text-sm"
              target="_theabhipatel"
            >
              Giriraj Mart
            </Link>
          </div> */}
        </div>
        {/* --------------->>> Contact Info <<<------------- */}
        <div className="py-10  flex flex-col gap-y-3">
          <h3 className="font-bold  text-xl">Contact Info :</h3>
          <h4 className="font-bold my-text2">Atul Tiwari</h4>
          <div className="flex flex-col gap-2 ">
            <Link
              href={"https://www.linkedin.com/in/atul-tiwari-8b3852aa/"}
              target="_blank"
              className="flex gap-3 items-center text-sm text-secondary"
            >
              <BsLinkedin className="  hover:text-white  duration-200" />
              <span>in/atul-tiwari</span>
            </Link>

            <Link
              href={"https://github.com/atultiwarianj"}
              target="_blank"
              className="flex gap-3 items-center text-sm text-secondary"
            >
              <BsGithub className=" hover:text-white duration-200 " />
              <span>/atultiwari</span>
            </Link>

            {/* <Link
              href={"https://github.com/codingwithcod"}
              target="_blank"
              className="flex gap-3 items-center text-sm text-secondary"
            >
              <BsGithub className="hover:text-white duration-200 " />
              <span>/codingwithcod</span>
            </Link> */}
            <Link
              href={"mailto:atultiwarianj@gmail.com"}
              target="_blank"
              className="flex gap-3 items-center text-sm text-secondary"
            >
              <TbMailFilled className="hover:text-white duration-200 " />
              <span>atultiwarianj@gmail.com</span>
            </Link>
          </div>
        </div>
      </div>
      {/* -------- copyRight footer ------ */}
      <div className="flex px-5 sm:px-20 py-10 gap-y-5 flex-col sm:flex-row justify-between items-center ">
        <div className="flex gap-4  ">
          <Link
            href={"https://www.linkedin.com/in/atul-tiwari-8b3852aa/"}
            target="_blank"
          >
            <BsLinkedin className="text-secondary text-xl hover:text-white  duration-200" />
          </Link>
          <Link href={"https://github.com/atultiwarianj"} target="_blank">
            <BsGithub className="text-secondary text-xl hover:text-white duration-200 " />
          </Link>
        </div>
        <div>
          <h3 className="flex items-center gap-2 text-secondary">
            <span>Made by</span> <FaHeart className="text-red-600" />
            <span> Atul tiwari</span>
          </h3>
        </div>
        <div>
          <h3 className="text-secondary text-xs text-center">
            Copyright © {new Date().getFullYear()} Atul tiwari | All Rights
            Reserved
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
