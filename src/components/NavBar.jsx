import React, {useState, useEffect} from 'react';
import { FaBars, FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BsChatSquareDots } from 'react-icons/bs';


const NavBar = () => {
const [nav, setNav] = useState(false)

const handleNav = () =>{
    setNav(!nav)
}
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
        <ul className='hidden sm:flex px-4'>
            <li> 
                <a href="/">Home</a>
            </li>
            <li> 
                <a href="#income">Income</a>
            </li>
            <li> 
                <a href="#spent">Spent</a>
            </li>
            <li> 
                <a href="#disposable">Disposable</a>
            </li>
            <li> 
                <a href="#savings">Savings</a>
            </li>
        </ul>
        <div className='flex justify-between'>
          <FaTwitter className='mx-4'/>
          <FaFacebookF className='mx-4' />
          <FaGithub className='mx-4'/>
          <FaLinkedin className='mx-4'/>
        </div>
        <div onClick={handleNav} className='sm:hidden z-10'>
            <FaBars size={20} className='mr-4 cursor-pointer'/>
        </div>
        <div onClick={handleNav} className={nav ?'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0  w-full h-screen bg-black/90 px-4 py-7 flex flex-col':'absolute top-0 h-screen left-[-100%] easy-in duration-500'}>
          <ul className='h-full w-full text-center pt-12'>\
            <li className='text-2xl py-8'> 
                <a href="/">Home</a>
            </li>
            <li className='text-2xl py-8'> 
                <a href="#income">Income</a>
            </li>
            <li className='text-2xl py-8'> 
                <a href="#spent">Spent</a>
            </li>
            <li className='text-2xl py-8'> 
                <a href="#disposable">Disposable</a>
            </li>
            <li className='text-2xl py-8'> 
                <a href="#savings">Savings</a>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default NavBar