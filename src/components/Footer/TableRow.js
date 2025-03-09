import React from "react";

const TableRow = ({ tableRow }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <tr>
      <td>{tableRow.year}</td>
      <td>{formatter.format(tableRow.savingsEndOfYear)}</td>
      <td>{formatter.format(tableRow.yearlyInterest)}</td>
      <td>
        {formatter.format(
          tableRow.savingsEndOfYear -
            tableRow.initInvestment -
            tableRow.yearlyContribution * tableRow.year
        )}
      </td>
      <td>
        {formatter.format(
          tableRow.initInvestment + tableRow.yearlyContribution * tableRow.year
        )}
      </td>
    </tr>
  );
};

export default TableRow;
