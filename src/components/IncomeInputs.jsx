import React, {useState} from 'react';


function IncomeInputs({setmainIncome, mainIncome, setadditionalIncome,additionalIncome}) {
    
    
    const handleMainChange = (event) => {
        setmainIncome(event.target.value);
    };
    const handleAdditionalChange = (event) => {
        setadditionalIncome(event.target.value);
    };
    const handleTotalChange = (event) => {
        settotalIncome(event.target.value)
    }

return (
    <div id='income' className='max-w-[1140px] m-auto w-full p-10 bg-gradient-to-r from-yellow-300 to-lime-600'>
        <form className='lg:flex lg:justify-between w-full items-center'>
        <div className='flex flex-col my-2 py-2'> 
            <label className='block text-sm font-medium leading-6 text-gray-900'>Main Income</label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                </div>
            <input type="number" value={mainIncome} onChange={handleMainChange}  className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00'/>
            <div class="absolute inset-y-0 right-0 flex items-center">
             <label className="sr-only">Currency</label>
            <select id="currency" name="currency" className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                 <option>GBP</option>
                 <option>EUR</option>
                 <option>USD</option>
            </select>
            </div>
            </div>
        </div>  
        <div className='flex flex-col my-2 py-2'> 
            <label className='block text-sm font-medium leading-6 text-gray-900'>Additional Income</label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                </div>
            <input type="number" value={additionalIncome} onChange={handleAdditionalChange}  className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00'/>
            <div class="absolute inset-y-0 right-0 flex items-center">
             <label className="sr-only">Currency</label>
            <select id="currency" name="currency" className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                 <option>GBP</option>
                 <option>EUR</option>
                 <option>USD</option>
            </select>
            </div>
        </div>
        </div>
        <div className='flex flex-col my-2 py-2 '> 
            <label className='block text-sm font-medium leading-6 text-gray-900'>Total Income</label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                </div>
            <input type="number"className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00'/>
            <div class="absolute inset-y-0 right-0 flex items-center">
             <label className="sr-only">Currency</label>
            <select id="currency" name="currency" className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                 <option>GBP</option>
                 <option>EUR</option>
                 <option>USD</option>
            </select>
            </div>
            </div>
        </div>
        </form>    
    </div>
                                
);
}

export default IncomeInputs;