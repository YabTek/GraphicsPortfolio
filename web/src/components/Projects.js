import React from "react";
import Card from "./Card";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.jpg";
import card1 from "../assets/business.png";
import card2 from "../assets/card.png";
import card3 from "../assets/atms.jpg";
import card4 from "../assets/bela.png";
import model from "../assets/3d.png";
import ad from "../assets/ad.png";
import photo from "../assets/photo.jpg";
import tag from "../assets/belatag.png";

const Projects = () => {
  return (
    <div  id="projects" className="space-y-[12rem]">
      <Card
        title="Logo Design"
        img1={logo1}
        img2={logo4}
        img3={logo2}
        img4={logo3}
        description="Unlock the essence of your brand with my eye-catching design expertise🔥"
      />
      <Card
        title="Business card & ATM cards design"
        img1={card1}
        img2={card4}
        img3={card3}
        img4={card2}
        description="Unlock the essence of your brand with my eye-catching design expertise🔥"
      />
      <Card
        title="Photo editing,modeling & brandings"
        img1={model}
        img2={photo}
        img3={ad}
        img4={tag}
        description="Unlock the essence of your brand with my eye-catching design expertise🔥"
      />
    </div>
  );
};

export default Projects;
