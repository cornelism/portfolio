import React from "react";
import classNames from "classnames";
import Wrapper from "../Wrapper";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <Wrapper>
      div.container
      <div className={classNames([styles.hero, styles.gradient])}>
        Let's work
        <br />
        together. 
      </div>
    </Wrapper>
  );
}

export default Hero;
