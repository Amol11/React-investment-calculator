import React, { useState } from "react";

import styles from "./InvestmentForm.module.css";
import InputField from "../UI/InputField";

const InvestmentForm = ({ calculateHandler }) => {
  const [curSavings, setCurSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [period, setPeriod] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    calculateHandler({
      curSavings,
      yearlySavings,
      interestRate,
      period,
    });

    handleOnReset();
  };

  const handleOnReset = () => {
    setCurSavings("");
    setYearlySavings("");
    setInterestRate("");
    setPeriod("");
  };

  const handleCurSavings = (event) => {
    setCurSavings(event.target.value);
  };

  const handleYearlySavings = (event) => {
    setYearlySavings(event.target.value);
  };

  const handleInterestRate = (event) => {
    setInterestRate(event.target.value);
  };

  const handlePeriod = (event) => {
    setPeriod(event.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleOnSubmit}>
      <div className={styles["input-group"]}>
        <InputField
          label="Current Savings ($)"
          altText="current-savings"
          type="number"
          onChange={handleCurSavings}
          value={curSavings}
        />
        <InputField
          label="Yearly Savings ($)"
          altText="yearly-contribution"
          type="number"
          onChange={handleYearlySavings}
          value={yearlySavings}
        />
      </div>
      <div className={styles["input-group"]}>
        <InputField
          label="Expected Interest (%, per year)"
          altText="expected-return"
          type="number"
          onChange={handleInterestRate}
          value={interestRate}
        />
        <InputField
          label="Investment Duration (years)"
          altText="duration"
          type="number"
          onChange={handlePeriod}
          value={period}
        />
      </div>
      <p className={styles.actions}>
        <button className={styles.buttonAlt} type="reset" onClick={handleOnReset}>
          Reset
        </button>
        <button className={styles.button} type="submit">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
