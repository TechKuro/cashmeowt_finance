import React, { useState } from "react";
import SelectDropdown from "./SelectDropdown";

const InputList = ({ onAdd }) => {
  const options = [
    { value: "Rent", label: "Rent" },
    { value: "Petrol", label: "Petrol" },
    { value: "Groceries", label: "Groceries" },
    { value: "Shopping", label: "Shopping" },
    { value: "Credit Cards", label: "Credit Card" },
    { value: "Mortgage", label: "Mortgage" },
    { value: "Childcare", label: "Childcare" },
  ];

  const [inputs, setInputs] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedOptions, setSelectionOptions] = useState(options[0].value);

  const handleSave = () => {
    setInputs([...inputs, { value: inputValue, option: selectedOptions }]);
    setInputValue("");
    onAdd({ value: parseFloat(inputValue), option: selectedOptions });
  };

  return (<div id='spent' className='max-w-[1140px] m-auto w-full p-10 bg-gradient-to-r from-yellow-300  to-lime-600 rounded shadow-lg'>
          <div className='lg:flex lg:justify-between w-full items-center'>
          <div className='flex flex-col my-2 py-2'>
            <h2>Monthly Expenses</h2>
            <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                </div>
             {inputs.map((item, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <input type="number" value={item.value} readOnly className='block w-[80%] rounded-md border-0 py-1.5 pl-7 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00' />
          <span className="ml-3">{item.option}</span>
          <span
            style={{
              color: "green",
              fontSize: "1.5em",
              marginLeft: "10px",
            }}
          >
            ✓
          </span>
        </div>
      ))}
      <div style={{ display: "flex", alignItems: "center" }}>
        <input className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00'
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SelectDropdown 
          options={options}
          setSelectionOptions={setSelectionOptions}
        />
        <button className='pl-14'onClick={handleSave}>Save</button>     
      </div>
      </div>
      </div>
      </div>
      </div>
    
  );
};

export default InputList;
