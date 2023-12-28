import React from "react";
import figma from "../assets/figma.png";
import illustrator from "../assets/illustrator.png";
import photoshop from "../assets/photoshop.png";
import xd from "../assets/xd.png";
import blender from "../assets/blender.png";
import indesign from "../assets/indesign.png";

const Skills = () => {
  return (
    <div >
      <h1 class="text-left lg:text-center text-xl lg:text-3xl ml-16 lg:ml-0 font-bold pb-4 sm:pb-8 text-gray-500 ">
        Tools and Technologies
      </h1>
      <div class="flex ml-16 lg:ml-0 lg:flex-col ">
        <div class="flex lg:justify-around space-x-4">
          <div class="flex flex-col items-center">
            <img class="h-8 w-28 sm:h-16 sm:w-auto" src={illustrator} alt="" />
            <p class="font-semibold hidden lg:block">Adobe illustrator</p>
          </div>
          <div class="flex flex-col items-center">
            <img class="h-8 w-28 sm:h-16 sm:w-auto" src={photoshop} alt="" />
            <p class="font-semibold hidden lg:block">Adobe Photoshop</p>
          </div>

          <div class="flex flex-col items-center">
            <img class="h-8 w-28 sm:h-16 sm:w-auto" src={indesign} alt="" />
            <p class="font-semibold hidden lg:block">Adobe Indesign</p>
          </div>
        </div>
        <div class="flex pl-4 justify-around space-x-4 lg:pl-0 lg:pt-6">
          <div class="flex flex-col items-center">
            <img class="h-8 w-28 sm:h-16 sm:w-auto" src={xd} alt="" />
            <p class="font-semibold hidden lg:block">Adobe XD</p>
          </div>
          <div class="flex flex-col items-center">
            <img class="h-8 w-28 sm:h-16 sm:w-auto" src={blender} alt="" />
            <p class="font-semibold hidden lg:block">Blender</p>
          </div>
          <div class="flex flex-col items-center">
            <img class="h-8 w-28 sm:h-16 sm:w-auto" src={figma} alt="" />
            <p class="font-semibold hidden lg:block">Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
