import React, { useEffect, useState } from "react";
import Link from "next/link";
import { styles } from "@/utils/styles";
import { navLinks } from "@/constants";

import { logo, menu, close } from "@/assets";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` md:px-16  w-full flex items-center py-5 fixed top-0 z-50 max-w-screen-2xl   ${
        scrolled ? "bg-[#0d1117a1] backdrop-blur-md" : "bg-transparent"
      }  shadow-[#131820fd]  ${scrolled ? "shadow-md" : ""}`}
    >
      <div className="w-full px-6 flex justify-between items-center z-50 ">
        <Link
          href="/"
          className="flex items-center gap-2 "
          // onClick={() => {
          //   setActive("");
          //   window.scrollTo(0, 0);
          // }}
        >
          <span className="text-3xl md:text-4xl text-[#f1f1f1] font-bold  tracking-wider">
             <img
            src='../logo2.png'
            width='80px'
            alt="menu"
            className=" object-contain cursor-pointer"
          />
          </span>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white font-medium text-[18px]`}
              onClick={() => setActive(link.title)}
            >
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex  justify-center items-center  ">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            onClick={() => setToggle((prev) => !prev)}
            className="w-[28px] h-[28px] object-contain cursor-pointer"
          />
        </div>
      </div>
      {/* Mobile navigation */}

      <div
        className={`absolute w-full h-screen bg-[#0d1117] top-[0px] z-40 transition ease-in duration-300  md:hidden ${
          toggle ? "" : "translate-x-[150%]"
        } `}
      >
        <div
          className={`h-[75px]  border-gray-900  shadow-[#131820fd] 
          ${scrolled ? "shadow-lg" : ""}`}
        />
        <div className="w-full px-12 mt-3">
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-slate-300"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
                <br />
                <span className="text-slate-500">{nav.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// <div
//   className={`${
//     !toggle ? "hidden" : "flex"
//   } p-6  absolute top-0 right-0  w-full h-screen z-20 rounded-xl bg-[#0d1117]`}
// >
// <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
//   {navLinks.map((nav) => (
//     <li
//       key={nav.id}
//       className={`font-poppins font-medium cursor-pointer text-[16px] ${
//         active === nav.title ? "text-white" : "text-secondary"
//       }`}
//       onClick={() => {
//         setToggle(!toggle);
//         setActive(nav.title);
//       }}
//     >
//       <a href={`#${nav.id}`}>{nav.title}</a>
//     </li>
//   ))}
// </ul>
// </div>;
