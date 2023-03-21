import React, { useState } from "react";
import SelectDropdown from "./SelectDropdown";

const InputList = () => {
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
  };

  return (
    <div>
      {inputs.map((item, index) => (
        <div key={index}>
          <input type="number" value={item.value} readOnly />
          <span>{item.option}</span>
        </div>
      ))}
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SelectDropdown
          options={options}
          setSelectionOptions={setSelectionOptions}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default InputList;