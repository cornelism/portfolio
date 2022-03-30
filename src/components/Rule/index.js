import React from "react";
import Wrapper from "../Wrapper";
import styles from "./Rule.module.scss";

const Rule = () => {
  return (
    <Wrapper>
      <hr className={styles.rule} />;
    </Wrapper>
  );
};

export default Rule;
