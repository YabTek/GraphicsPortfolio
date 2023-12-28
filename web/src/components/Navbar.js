import React from "react";
import logo from "../assets/graphic-designer.png";
import { Link } from "react-scroll";
import profile from "../assets/profile.jpg";


const Navbar = () => {
  return (
    <div class="bg-gray-100 shadow-xl p-4 flex items-center justify-between fixed w-full top-0 z-10">
      <div class="flex items-center">
        <img src={logo} alt="Logo" class="w-8 h-8 mr-2" />
        <span class="font-bold text-xl font-serif">
          <span class="animate-text">The</span> 
          <span class="animate-blink"> Power</span>
          <span class="animate-text"> of</span> 
          <span class="animate-blink"> Design</span></span>
      </div>
      <img className=" rounded-full sm:hidden w-16 h-16 " src={profile} alt="" />

      <div class="flex items-center space-x-12 px-12 text-lg font-semibold hidden lg:block">
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
