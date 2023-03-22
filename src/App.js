import { useState, useEffect } from "react";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Motto from "./components/Motto";
import IncomeInputs from "./components/IncomeInputs";
import TotalIncome from "./components/TotalIncome";
import InputList from "./components/InputList";
import IncomeExpenseChart from './components/IncomeExpenseChart';


function App() {
  const options = [
    { value: "Rent", label: "Rent" },
    { value: "Petrol", label: "Petrol" },
    { value: "Groceries", label: "Groceries" },
    { value: "Shopping", label: "Shopping" },
    { value: "Credit Cards", label: "Credit Card" },
    { value: "Mortgage", label: "Mortgage" },
    { value: "Childcare", label: "Childcare" },
  ];

  const [mainIncome, setmainIncome] = useState([]);
  const [additionalIncome, setadditionalIncome] = useState([]);
  const [optionValues, setOptionValues] = useState({});
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [netIncome, setNetIncome] = useState(0);
  
  useEffect(() => {
    setNetIncome(totalIncome - totalExpenses);
  }, [totalIncome, totalExpenses]);


  const handleAddInput = (inputData) => {
    setOptionValues((prev) => {
      const { option, value } = inputData;
      if (prev[option]) {
        return { ...prev, [option]: prev[option] + value };
      } else {
        return { ...prev, [option]: value };
      }
    });
  };
  return (
      <div>
        <TopBar />
        <NavBar />
        <Hero />
        <Motto />
        <IncomeInputs
          setmainIncome={setmainIncome}
          additionalIncome={additionalIncome}
          setadditionalIncome={setadditionalIncome}
          mainIncome={mainIncome}
          setTotalIncome={setTotalIncome}
          totalIncome={totalIncome}
        />
        
        <InputList options={options} onAdd={handleAddInput} totalExpenses={totalExpenses} setTotalExpenses={setTotalExpenses} />
        <TotalIncome
        mainIncome={mainIncome}
        additionalIncome={additionalIncome}
        totalExpenses={totalExpenses}
      />


          <h2 className="text-center">Here is your breakdown</h2>
            <ul>
              {Object.entries(optionValues).map(([key, value]) => (
                <li  className='text-2xl'key={key}>
                  {key}: {value}
                </li>
              ))}
            </ul>

            <IncomeExpenseChart
        totalIncome={totalIncome}
        totalExpenses={totalExpenses}
        netIncome={netIncome}
      />
    </div>
  );
}

export default App;

