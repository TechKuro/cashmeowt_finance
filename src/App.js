import { useState } from "react";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Motto from "./components/Motto";
import IncomeInputs from "./components/IncomeInputs";
import SelectDropdown from "./components/SelectDropdown";
import AmountSpent from "./components/AmountSpent";
import TotalIncome from "./components/TotalIncome";
import SubmitButton from "./components/SubmitButton";
import Ticker from "./components/Ticker";
import InputList from "./components/InputList"; // Make sure to import InputList

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
        <SelectDropdown
          options={options}
          setSelectionOptions={setSelectionOptions}
        />
        {/* Add InputList component here */}
        <h2>Numerical Inputs with Save Button</h2>
        <InputList />
      </div>
    </div>
  );
}

export default App;
