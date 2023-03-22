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
  const [totalIncome, setTotalIncome] = useState(0);
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
         <InputList options={options} onAdd={handleAddInput} />
            <ul className='max-w-[1140px] m-auto w-full p-10 bg-gradient-to-r from-yellow-300  to-lime-600 rounded shadow-lg'>
                <div className='lg:flex lg:justify-between w-full items-center'>
                <div className='flex flex-col my-2 py-2'>
                <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                </div>
                {Object.entries(optionValues).map(([key, value]) => (
                   <li  className='text-2xl'key={key}>
                  {key}: {value}
                   </li>
              ))}
                </div> 
                </div>
                </div>
            </ul>  
            </div>
  );
}

export default App;

