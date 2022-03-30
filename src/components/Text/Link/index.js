import React from "react";
import classNames from "classnames";
import styles from "./Link.module.scss";

const Link = ({ block, children, href, target }) => {
  return (
    <a
      className={classNames([styles.link, block ? styles.block : null])}
      href={href}
      target={target}
    >
      {children}
    </a>
  );
};

export default Link;
