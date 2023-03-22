import React from 'react'

const Motto = () => {
return(
  <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
    <div className='relative p-4'>
      <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black text-4xl font-bold'>Knowledge</h3>
      <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src='./images/knowledge.jpg'/>
    </div>
    <div className='relative p-4'>
      <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black text-4xl font-bold'>Earnings</h3>
      <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src='./images/pounds.jpg'/>
    </div>
    <div className='relative p-4'>
      <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black text-4xl font-bold'>Savings</h3>
      <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src='./images/piggy.jpg'/>
    </div>
  </div>
)
}

export default Motto