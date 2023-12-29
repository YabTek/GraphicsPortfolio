import React from "react";
import certificate1 from "../assets/certificate1.jpg";
import certificate2 from "../assets/certificate2.jpg";
import certificate3 from "../assets/certificate3.jpg";

const Certificates = () => {
  return (
    <div>
      <h1 id="certificates" className="text-left ml-24 lg:ml-12 text-3xl font-serif font-bold pt-48 mb-8 text-gray-800">
        Certificates
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-left pl-8">
        <img
          className="h-[20rem] w-[22rem]  xl:h-[30rem] xl:w-[30rem]  mb-8 md:mb-0 shadow-2xl shadow-gray-500"
          src={certificate1}
          alt=""
        />
        <img
          className="h-[20rem] w-[22rem]  pt-4 lg:pt-0 xl:h-[30rem] xl:w-[30rem]  mb-8 md:mb-0  shadow-2xl shadow-gray-500"
          src={certificate2}
          alt=""
        />
        <img
          className="h-[20rem] w-[22rem]  pt-4 lg:pt-0 xl:h-[30rem] xl:w-[30rem]  shadow-2xl shadow-gray-500"
          src={certificate3}
          alt=""
        />
      </div>
    </div>
  );
};

export default Certificates;
