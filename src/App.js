import { useState } from 'react';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import IncomeInputs from './components/IncomeInputs';
import SelectDropdown from './components/SelectDropdown';
import AmountSpent from './components/AmountSpent';
import TotalIncome from './components/TotalIncome';
import SubmitButton from './components/SubmitButton';
 

function App() {

    

  const options = [
    {value: 'Rent', label: 'Rent'},
    {value: 'Petrol', label: 'Petrol'},
    {value: 'Groceries', label: 'Groceries'},
    {value: 'Shopping', label: 'Shopping'},
    {value: 'Credit Cards', label: 'Credit Card'},
    {value: 'Mortgage', label: 'Mortgage'},
    {value: 'Childcare', label: 'Childcare'}
  ];

  const [selectedOptions, setSelectionOptions] = useState(options[0].value);
  const [mainIncome, setmainIncome] = useState([]);
  const [additionalIncome, setadditionalIncome] = useState([]);
  

  
  const handleDropdownChange = (event) => {
    setSelectionOptions(event.target.value);
  };

  return (<div>
         <TopBar />
         <NavBar /> 
         <Hero />        
         <div className='grid grid-rows-2 grid-cols-2 bg-gradient-to-l from-blue-700 to-yellow-200 h-screen w-screen '>
         <div className='mx-8 my-8'>
            <h1 className='text-xl ml-5'>Enter Your Incomes Here</h1>
            <br></br>
            <IncomeInputs setmainIncome={setmainIncome} 
            additionalIncome={additionalIncome}
            setadditionalIncome={setadditionalIncome}
            mainIncome={mainIncome} />
            <TotalIncome mainIncome={mainIncome} additionalIncome={additionalIncome} />
      </div>
      <div>
           <h1>Enter Your Expenses </h1>
           <AmountSpent/>
           <SelectDropdown options={options} onChange={handleDropdownChange} />
           <SubmitButton />
      </div> 
      </div>  
      </div>  
  )


}

export default App;
