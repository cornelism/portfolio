import React from "react";
import Wrapper from "../Wrapper";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <Wrapper>
      <div className={styles.hero}>
        Let's work
        <br />
        together. 🤝
      </div>
    </Wrapper>
  );
}

export default Hero;
