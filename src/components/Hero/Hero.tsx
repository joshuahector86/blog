import React from "react";
import Image from "next/image";
import photo from "../../assets/jpg1.jpg";

import styles from "./Hero.module.scss";

const Hero = () => (
  <div className={styles.hero}>
    <div className={styles.hero_heading}>
      <div className={styles.title}>Ttitle of the blog</div>
      <div className={styles.undertitle}>Under Title of the blog</div>
    </div>
    <Image src={photo} alt="Long Header Photo" />
  </div>
);

export default Hero;
