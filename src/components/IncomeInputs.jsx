import React, {useState} from 'react';

function IncomeInputs({setmainIncome, mainIncome, setadditionalIncome,additionalIncome}) {
    
    
    const handleMainChange = (event) => {
        setmainIncome(event.target.value);
    };
    const handleAdditionalChange = (event) => {
        setadditionalIncome(event.target.value);
    };

return (
    <div>
        <label>
            Main Income:
            <input type="number" value={mainIncome} onChange={handleMainChange} />
        </label>
        <br />
        <label>
            Additional Income
            <input type="number" value={additionalIncome} onChange={handleAdditionalChange} />
        </label>
    </div>
);
}

export default IncomeInputs;