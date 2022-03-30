import React from "react";
import { Link, Wrapper } from "../";
import styles from "./Header.module.scss";

function Header() {
  return (
    <Wrapper>
      <div className={styles.header}>
        <div className={styles.name}>Hi, there! 👋 </div>
        <div className={styles.name}>My name is Michaël. </div>
        {/* <div className={styles.title}>Front-end Engineer and Consultant</div> */}
        <nav className={styles.nav}>
          <Link href="/whoiam" target="_self">
            who I am.
          </Link>
          <Link href="/whatimade" target="_self">
            what I made.
          </Link>
          <Link href="/whatiwrote" target="_self">
            what I wrote.
          </Link>
          {/* <Link href="/hire" target="_self">
            you can 
          </Link> */}
        </nav>
      </div>
    </Wrapper>
  );
}

export default Header;
