import React from "react";
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai';
 
const TopBar = () =>{
    return(
        <div className="flex justify-between items-center px-4 py-2">
            <div className="flex items-center">
                <img src="./images/cashLogo.png" className='h-8 mr-2'></img>
                <h1 className="text-xl font-bold text-red-500">Cashmeowt</h1>
            </div>
            <div className="flex">
              <div className="hidden md:flex items-center px-6"> 
                <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]'/>
                <p className="text-sm text-gray-700 hover:text-green-500">9am 5pm</p>
              </div>
              <div className="hidden md:flex items-center px-6">
                <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]'/>
                <p className="text-sm text-gray-700 hover:text-green-500">020-8-1234567</p>
              </div>
            <button>Sign In</button>
            <button>Sign Up</button>
            </div>
        </div>
    )
}
export default TopBar