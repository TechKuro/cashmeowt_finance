import React, {useState,useEffect} from 'react';


function IncomeInputs({setmainIncome, mainIncome, setadditionalIncome,additionalIncome,totalIncome,setTotalIncome}) {
    
    
    const handleMainChange = (event) => {
        setmainIncome(event.target.value);
    };
    const handleAdditionalChange = (event) => {
        setadditionalIncome(event.target.value);
    };
    const handleTotalChange = (event) => {
        settotalIncome(event.target.value)
    }
    useEffect(()=>{
        let sum =0
        // adding up the two income arrays
        let total =[].concat(mainIncome,additionalIncome)
        
        //convert array to numbers
        let  intify = total.map(Number)
        console.log(intify)
        
        // add up the total values
        const sumFunction = (a, b) => a + b;
        intify.forEach(element=>{
         
            sum = sumFunction(sum,element)
        })

        setTotalIncome(sum)

        localStorage.setItem('sum',JSON.stringify(sum))



    },[mainIncome,additionalIncome])
return (
    <div id='income' className='max-w-[1140px] m-auto w-full p-10 bg-gradient-to-r from-yellow-300  to-lime-600'>
        <form className='lg:flex lg:justify-between w-full items-center'>
        <div className='flex flex-col my-2 py-2'> 
            <h2>Main Income</h2>
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
            <h2>Additional Income</h2>
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
            <h2>Total Income</h2>
            <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                </div>
            <input type="number" value={totalIncome}className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00'/>
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