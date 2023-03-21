import { useState } from "react";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Motto from "./components/Motto";
import IncomeInputs from "./components/IncomeInputs";
import TotalIncome from "./components/TotalIncome";
import InputList from "./components/InputList"; 

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
  const [selectedOptions, setSelectionOptions] = useState(options[0].value);
  const [mainIncome, setmainIncome] = useState([]);
  const [additionalIncome, setadditionalIncome] = useState([]);
  const [optionValues, setOptionValues] = useState({});

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
        />
        <TotalIncome
          mainIncome={mainIncome}
          additionalIncome={additionalIncome}
        />
        
      </div>
      <h2>Numerical Inputs with Save Button</h2>

      <InputList options={options} onAdd={handleAddInput} />

      <h2>Option Totals</h2>
      <ul>
        {Object.entries(optionValues).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

