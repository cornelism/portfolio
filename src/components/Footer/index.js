import React from "react";
import { Link, Wrapper } from "../";
import styles from "./Footer.module.scss";
import layoutStyles from "../Layout.module.scss";

function Footer() {
  return (
    <Wrapper>
      <div className={styles.footer}>
        <div>
          cornelism.be
          <br />
          Melkerijstraat 34 bus 32
          <br />
          1500 Halle
          <br />
          Belgium
        </div>

        <div className={layoutStyles.alignRight}>
          <Link block href="/terms-of-use">
            terms of use
          </Link>
          <Link block href="/privacy-policy">
            privacy policy
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
