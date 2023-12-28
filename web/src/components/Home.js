import React from "react";
import profile from "../assets/profile.jpg";

const Home = () => {
  return (
    <div id="home" className="flex justify-between ml-24 sm:ml-auto pt-36 pb-24 lg:p-24 lg:pt-36 relative">
      <div className="w-2/3 lg:w-1/2 p-4 lg:pt-[9rem] relative">
        <h1 class="text-3xl font-bold">Hello👋</h1>
        <h1 class="text-2xl font-semibold">I'm Yeabsira Tekuamwork </h1>

        <p class="text-lg font-semibold">
          a passionate
          <span class="text-[#FFA800] font-serif text-2xl">
            {" "}
            graphic designer{" "}
          </span>
          <span class="hidden sm:block">
          with a keen eye for detail and a flair for delivering engaging visual
          content. With many years of experience in the industry, I have honed
          my skills to provide top-notch design solutions for clients.</span>
        </p>
      </div>
      <div className="absolute md:absolute w-96  ml-[42rem] mt-[26rem] bg-[#0E1A46] p-8 rounded-lg shadow-lg shadow-orange-300 hidden xl:block">
        <p className="text-white text-md italic">
          <span class="font-bold font-serif text-xl text-[#FF9534]">"</span>
          Design is not just what it looks like and feels like. Design is how it
          works.
          <span class="font-bold font-serif text-xl text-[#FF9534]">"</span>
        </p>
        <p className="text-right text-[#FF9534] text-sm mt-4">- Steve Jobs</p>
      </div>
      <img className="rounded-xl ml-24 sm:ml-auto w-56 h-56 lg:w-[27rem] lg:h-auto" src={profile} alt="" />
    </div>
  );
};

export default Home;
