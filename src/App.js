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
        < div class="max-w-[1140px] lg:flex md:flex justify-center m-auto w-full p-10 bg-gradient-to-r from-yellow-300  to-lime-600">
        <InputList options={options} onAdd={handleAddInput} totalExpenses={totalExpenses} setTotalExpenses={setTotalExpenses} />
        
        <div className='max-w-[1140px] md:flex w-full  bg-gradient-to-r from-yellow-300  to-lime-600 rounded shadow-lg'>
            <div className='lg:flex  flex-col lg:justify-between w-full items-center'>
            <div className='flex flex-col my-2 py-2'>           
        <h2 className="text-center pt-8">Here is your Breakdown</h2>
        </div>
        <div className="relative mt-2 rounded-md shadow-sm">
            <ul>
              {Object.entries(optionValues).map(([key, value]) => (
                <li  className='text-2xl'key={key}>
                  {key}: {value}
                   </li>
              ))}
            </ul>
            </div>
            </div>
            </div>
        </div>   
            <TotalIncome
        mainIncome={mainIncome}
        additionalIncome={additionalIncome}
        totalExpenses={totalExpenses}
      />
            <IncomeExpenseChart
        totalIncome={totalIncome}
        totalExpenses={totalExpenses}
        netIncome={netIncome}
      />
      </div>
  );
}

export default App;

