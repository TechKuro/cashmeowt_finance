import React, {useState} from 'react';

function AmountSpent(){
    const [amountSpent, setamountspent]= useState('');

    const handleAmountSpent =(event)=>{
        setamountspent(event.target.value);

    }

return(
    <div>
        <label>Amount Spent :</label>
        <input type="number" value={amountSpent} onChange={handleAmountSpent} />

    </div>
)

}

export default AmountSpent;