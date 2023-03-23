import React, {useState, useEffect} from 'react';
import { FaBars, FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Marquee from "react-fast-marquee";
import Ticker from "./Ticker"


const NavBar = () => {

const [nav, setNav] = useState(false)

const handleNav = () =>{
    setNav(!nav)
}    
    const [stockData, setStockData] = useState(0);

    useEffect(() => {
        const apiKey = "ebe3699433b327a341b2e8a0d2c8d11d"
        const api = "https://financialmodelingprep.com/api/v3/profile/AAPL,GOOG,MSFT,FB,AMZN,NVDA,TSLA,NFLX?apikey=" + apiKey;
        
        
        fetch(api).then(res => res.json()).then((data) => {
            setStockData(data)
           
           console.log(stockData)
        })
    },[]);
  return (
    <div className='sticky top-0 w-full min-h-[50px] flex justify-between items-center z-10 text-white bg-gray-700/80'>
        <ul className='hidden sm:flex px-4'>
            <li> 
                <a href="/">Home</a>
            </li>
            <li> 
                <a href="#income">Income</a>
            </li>
            <li> 
                <a href="#expenses">Expenses</a>
            </li>
            <li> 
                <a href="#disposable">Disposable</a>
            </li>
            <li> 
                <a href="#charts">Charts</a>
            </li>
        </ul>
        <Marquee>
            {stockData ? stockData.map((item) => {
             return (
                <Ticker item={item}/>
    )
         }): ""}
        </Marquee>

        <div className='flex justify-between'>
          <FaTwitter className='mx-4 hover:text-green-500'/>
          <FaFacebookF className='mx-4 hover:text-green-500' />
          <FaGithub className='mx-4 hover:text-green-500'/>
          <FaLinkedin className='mx-4 hover:text-green-500'/>
        </div>
                <div onClick={handleNav} className='sm:hidden z-10'>
            <FaBars size={20} className='mr-4 cursor-pointer'/>
        </div>
        <div onClick={handleNav} className={nav ?'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0  w-full h-screen bg-black px-4 py-7 flex flex-col':'absolute top-0 h-screen left-[-100%] easy-in duration-500'}>
          <ul className='h-full w-full text-center pt-12'>
            <li className='text-2xl py-8'> 
                <a href="/">Home</a>
            </li>
            <li className='text-2xl py-8'> 
                <a href="#income">Income</a>
            </li>
            <li className='text-2xl py-8'> 
                <a href="#expenses">Expenses</a>
            </li>
            <li className='text-2xl py-8'> 
                <a href="#disposable">Disposable</a>
            </li>
            <li className='text-2xl py-8'> 
                <a href="#charts">Charts</a>
            </li>
        </ul>
        </div>
    </div>
       

    );
};


export default NavBar;
