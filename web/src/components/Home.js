import React from "react";
import profile from "../assets/profile.jpg";

const Home = () => {
  return (
    <div
      id="home"
      className="flex justify-between sm:ml-auto pt-36 pb-24 lg:p-24 lg:pt-36 relative"
    >
      <div className="pl-4  sm:pl-auto xl:px-6 lg:pt-[8rem] relative">
        <h1 class="text-xl sm:px-2 sm:block sm:pl-auto sm:text-3xl font-bold">
          Hello👋<br/>I'm Yeabsira Tekuamwork
        </h1>
        <p class="text-lg font-semibold max-w-full ">
          I'm a passionate
          <span class="text-[#FFA800] font-serif text-2xl">
            {" "}
            graphic designer{" "}
          </span>
          <span>
            with a keen eye for detail and a flair for delivering engaging
            visual content. With many years of experience in the industry, I
            have honed my skills to provide top-notch design solutions for
            clients.
          </span>
        </p>
      </div>
      <div className="absolute md:absolute w-96 xl:h-auto lg:ml-[23rem] lg:mt-[23.5rem] xl:ml-[40rem] xl:mt-[22rem] bg-[#0E1A46] p-4 rounded-lg shadow-lg shadow-orange-300 hidden lg:block">
        <p className="text-white text-md italic">
          <span class="font-bold font-serif text-xl text-[#FF9534]">"</span>
          Design is not just what it looks like and feels like. Design is how it
          works.
          <span class="font-bold font-serif text-xl text-[#FF9534]">"</span>
        </p>
        <p className="text-right text-[#FF9534] text-sm mt-4">- Steve Jobs</p>
      </div>
      <img
        className="hidden rounded-xl ml-24 w-56 h-56 sm:block lg:w-[23rem] lg:h-auto"
        src={profile}
        alt=""
      />
    </div>
  );
};

export default Home;
