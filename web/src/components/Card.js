import React from "react";

const Card = ({ img1, img2, img3, img4, title, description }) => {
  return (
    <div>
      <h1 class="flex mx-[2rem] ml-14 sm:mx-[6rem] mb-16 sm:mb-24 text-2xl md:text-4xl font-bold font-serif text-gray-500 animate-blink">
        My awesome projects
      </h1>
      <div class="flex justify-between items-center px-[8.5rem] bg-[#F6F7F7] w-full h-[30rem] relative">
        <div class="w-2/3">
          <div class="flex items-center -ml-10 sm:ml-auto space-x-[17rem] md:space-x-[20rem] ">
            <img
              class="absolute shadow-2xl shadow-indigo-700  ring ring-indigo-200  w-64 h-56 md:w-80 md:h-64 rounded-xl -mt-[16rem] -ml-12"
              src={img1}
              alt=""
            />
            <img
              class=" absolute shadow-2xl shadow-indigo-700 ring ring-indigo-200 w-64 h-56 md:w-80 md:h-64 -mt-[16rem] ml-[20rem] rounded-xl "
              src={img2}
              alt=""
            />
          </div>
          <div class="flex pt-16">
            <img
              class=" absolute  shadow-2xl shadow-indigo-700 ring ring-indigo-200 w-64 h-56 md:w-80 md:h-64 rounded-xl ml-[17rem] md:ml-[20rem]"
              src={img3}
              alt=""
            />
            <img
              class="absolute shadow-2xl shadow-indigo-700 ring ring-indigo-200 w-64 h-56 md:w-80 md:h-64 -ml-12 rounded-xl"
              src={img4}
              alt=""
            />
          </div>
        </div>
        <div class="w-1/2 ml-[16rem]">
          <h1 className="text-4xl  font-bold font-serif animate-blink hidden xl:block">
            {title}
          </h1>
          <p className="animate-blink text-md md:text-lg font-bold hidden xl:block">
{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
