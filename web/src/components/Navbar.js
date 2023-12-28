import React from "react";
import logo from "../assets/graphic-designer.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div class="bg-gray-100 shadow-xl p-6 flex items-end justify-between fixed w-full top-0 z-10">
      <div class="flex items-center">
        <img src={logo} alt="Logo" class="w-8 h-8 mr-2" />
        <span class="font-bold text-xl font-serif">
          <span class="animate-text">The</span> 
          <span class="animate-blink"> Power</span>
          <span class="animate-text"> of</span> 
          <span class="animate-blink"> Design</span></span>
      </div>
      <div class="flex items-center space-x-12 px-12 text-xl font-semibold hidden lg:block">
      <Link to="home" spy={true} smooth={true} offset={-70} duration={500} activeClass="text-blue-500" className="cursor-pointer">
          Home
        </Link>
        <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} activeClass="text-blue-500" className="cursor-pointer">
          Projects
        </Link>
        <Link to="certificates" spy={true} smooth={true} offset={-70} duration={500} activeClass="text-blue-500" className="cursor-pointer">
          Certificates
        </Link>
        <Link to="infoRow" spy={true} smooth={true} offset={-70} duration={500} activeClass="text-blue-500" className="cursor-pointer">
          Services&Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
