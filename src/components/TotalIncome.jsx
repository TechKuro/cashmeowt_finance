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
    <div id='disposable' className='max-w-[1140px] m-auto w-full md:flex p-10 bg-gradient-to-r from-yellow-300  to-lime-600 rounded shadow-lg'>
  <div className='lg:flex lg:justify-center w-full items-center max-w-[1140px] m-auto p-10 bg-gradient-to-r from-yellow-300  to-lime-600 rounded shadow-lg'>
  <div className='flex flex-col my-2 py-2'>
  <h2 className="text-center">Total Expenses</h2>
    <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        </div>
      <div className="text-2xl text-center">£ {totalExpenses}</div>
   <h2 className="text-center">Disposable Income</h2>
   <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        </div>
      <div className="text-2xl text-center">£ {netIncome}</div>    
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default TotalIncome;
