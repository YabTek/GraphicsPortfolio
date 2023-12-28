import React from "react";
import Home from "../components/Home";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
     <div> 
      <Navbar/>
      <Home />
      <Projects />
      <Certificates />
      <div id = "infoRow" class="flex flex-col space-y-12 justify-around pt-36 pl-12 mb-[9rem] lg:flex-row ">
        <Services />
        <Skills />
        <Contact /> 
       </div>
    </div>
  );
};

export default Main;
