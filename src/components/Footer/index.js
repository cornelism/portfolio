import React from "react";
import Wrapper from "../Wrapper";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <Wrapper>
      <div className={styles.footer}>
        <div>2022 - cornelism.be</div>
        <div>PRIVACY POLICY</div>
      </div>
    </Wrapper>
  );
}

export default Footer;
