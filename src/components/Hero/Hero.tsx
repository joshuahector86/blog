import React from "react";
import Image from "next/image";
import photo from "../../assets/jpg1.jpg";

import "./Hero.module.scss";

const Hero = () => (
  <div>
    <div>
      <div>Ttitle of the blog</div>
      <div>Under Title of the blog</div>
    </div>

    <Image src={photo} alt="Long Header Photo" width={1000} />
  </div>
);

export default Hero;
