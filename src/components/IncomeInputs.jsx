import React, {useState} from 'react';

function IncomeInputs() {
    const [mainIncome, setmainIncome] = useState('');
    const [additionalIncome, setadditionalIncome] = useState('');

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
            <input className='pl-8' type="number" value={mainIncome} onChange={handleMainChange} />
        </label>
        <br />
        <label>
            Additional Income:
            <input className='pl-4' type="number" value={additionalIncome} onChange={handleAdditionalChange} />
        </label>
    </div>
);
}

export default IncomeInputs;