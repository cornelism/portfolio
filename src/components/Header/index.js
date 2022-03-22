import React from "react";
import Wrapper from "../Wrapper";
// import classNames from "classnames";
import styles from "./Header.module.scss";

function Header() {
  return (
    <Wrapper>
      <div className={styles.header}>
        <div></div>
        <div className={styles.name}>Michaël Cornelis</div>
        <div className={styles.title}>consultant // front-end engineer</div>
        <nav className={styles.nav}>
          <a href="/" target="_self">
            what I do
          </a>
          <a href="/whoami" target="_self">
            who I am
          </a>
          <a href="/hire" target="_self">
            hire me
          </a>
          <a href="/articles" target="_self">
            articles
          </a>
        </nav>
      </div>
    </Wrapper>
  );
}

export default Header;
