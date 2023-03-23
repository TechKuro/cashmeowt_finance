import React from 'react'

const hero = () => {
  return (
    <div className='max-w-[1140px] w-full mx-[auto]'>
        <img src='./images/background.jpg'
        className='w-full h-full object-cover'
        />

    <div className='max-w-[1140px] mx-auto'>
     <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>   
        <h1 className='font-bold text-4xl'>Welcome to your personal saving place</h1>
        <h2 className='text-4xl py-5 italic'>With<span className='text-red-600 m-5'>Cashmeowt</span></h2>
    </div>
    </div>
    </div>
  )
}

export default hero