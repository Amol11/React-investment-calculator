import React from "react";

import styles from "./Banner.module.css";
import logo from "../../assets/investment-calculator-logo.png";

const Banner = () => {
  return (
    <div className={styles.header}>
      <header>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    </div>
  );
};

export default Banner;
