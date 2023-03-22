import React, { useState, useEffect } from "react";

function TotalIncome({ mainIncome, additionalIncome, totalExpenses }) {
  const [totalIncome, setTotalIncome] = useState(0);
  const [netIncome, setNetIncome] = useState(0);

  useEffect(() => {
    let sum = 0;
    // adding up the two income arrays
    let total = [].concat(mainIncome, additionalIncome);

    //convert array to numbers
    let intify = total.map(Number);
    console.log(intify);

    // add up the total values
    const sumFunction = (a, b) => a + b;
    intify.forEach((element) => {
      sum = sumFunction(sum, element);
    });

    setTotalIncome(sum);
    setNetIncome(sum - totalExpenses);

    localStorage.setItem("sum", JSON.stringify(sum));
  }, [mainIncome, additionalIncome, totalExpenses]);

  return (
    <div>
      <h2>Net Income (Income - Expenses)</h2>
      <div>£ {netIncome}</div>
    </div>
  );
}

export default TotalIncome;
