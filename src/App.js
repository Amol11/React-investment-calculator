import React, { useState } from "react";

import Footer from "./components/Footer/Footer";
import Banner from "./components/Header/Banner";
import InvestmentForm from "./components/UserForm/InvestmentForm";

function App() {
  const [res, setRes] = useState([]);//most tricky part of the problem

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput.curSavings;
    const yearlyContribution = +userInput.yearlySavings;
    const expectedReturn = +userInput.interestRate / 100;
    const duration = +userInput.period;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution,
        initInvestment: +userInput.curSavings
      });
    }

    setRes(yearlyData);
  };

  return (
    <div>
      <Banner />
      <InvestmentForm calculateHandler={calculateHandler} />
      <Footer tableData={res} />
    </div>
  );
}

export default App;
