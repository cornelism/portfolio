import React from "react";
import Wrapper from "../Wrapper";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <Wrapper>
      <span className={styles.hero}>
        Let's work
        <br />
        Together
      </span>
    </Wrapper>
  );
}

export default Hero;
