import React from "react";
import phone from "../assets/phone-call.png";
import email from "../assets/gmail.png";
import linkedin from "../assets/linkedin (1).png";

const Contact = () => {
  return (
    <div>
      <h1 class="text-left text-3xl ml-16 lg:ml-0 font-bold pb-6 text-gray-500">Contact💁</h1>
      <div class="ml-16 lg:ml-0 flex-col">
      <div class="flex">
        <img class="h-10" src={phone} alt="" />
        <p class="text-xl font-semibold px-2">+251982462073</p>
      </div>
      <div class="flex">
        <img class="h-10" src={email} alt="" />
        <p class="text-xl font-semibold hover:text-blue-700 hover:underline px-4">
          <a href="mailto:yabtekuam@gmail.com">yabtekuam@gmail.com</a>
        </p>
      </div>
      <div class="flex">
        <img class="h-10" src={linkedin} alt="" />
        <p class="text-xl font-semibold hover:text-blue-700 hover:underline px-4">
          <a href="https://www.linkedin.com/in/yeabsira-tekuamwork/">
            linkedin
          </a>
        </p>
      </div>
      </div>

    </div>
  );
};

export default Contact;
