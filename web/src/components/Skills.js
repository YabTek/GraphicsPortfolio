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
      <h1 class="text-center lg:text-left text-3xl font-bold pb-8 text-gray-500 lg:text-center">
        Tools and Technologies💁
      </h1>
      <div class="flex lg:flex-col ">
        <div class="flex lg:justify-around space-x-4">
          <div class="flex flex-col items-center">
            <img class="h-16" src={illustrator} alt="" />
            <p class="font-semibold ">Adobe illustrator</p>
          </div>
          <div class="flex flex-col items-center">
            <img class="h-16" src={photoshop} alt="" />
            <p class="font-semibold">Adobe Photoshop</p>
          </div>

          <div class="flex flex-col items-center">
            <img class="h-16" src={indesign} alt="" />
            <p class="font-semibold">Adobe Indesign</p>
          </div>
        </div>
        <div class="flex pl-4 space-x-8 justify-around lg:space-x-4 lg:pl-0 lg:pt-6">
          <div class="flex flex-col items-center">
            <img class="h-16 " src={xd} alt="" />
            <p class="font-semibold">Adobe XD</p>
          </div>
          <div class="flex flex-col items-center">
            <img class="h-16" src={blender} alt="" />
            <p class="font-semibold">Blender</p>
          </div>
          <div class="flex flex-col items-center">
            <img class="h-16" src={figma} alt="" />
            <p class="font-semibold">Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
