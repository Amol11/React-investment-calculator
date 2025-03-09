import React from "react";

import styles from "./Footer.module.css";
import TableRow from "./TableRow";

const Footer = ({ tableData }) => {
  if (tableData.length === 0) {
    return <p style={{ textAlign: "center" }}>No Data available!</p>;
  }
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((tableRow) => (
          <TableRow key={tableRow.year} tableRow={tableRow} />
        ))}
      </tbody>
    </table>
  );
};

export default Footer;
