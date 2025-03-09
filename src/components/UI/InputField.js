import React from "react";

import styles from "./InputField.module.css";

const InputField = ({ label, altText, onChange, type, value }) => {
  return (
    <p>
      <label htmlFor={altText}>{label}</label>
      <input
        onChange={onChange}
        className={styles["user-input"]}
        type={type}
        id={altText}
        value={value}
      />
    </p>
  );
};

export default InputField;
