import React, {useState} from 'react'
import {Bars3Icon,  XMarkIcon} from '@heroicons/react/24/outline';
//import { FiMenu } from 'react-icons/fi';


const Navbar = () => {
const [nav,setNav] = useState(false);
const handleClick = () => setNav(!nav);


  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 items-center flex justify-between w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
                <ul className='hidden md:flex '>
                  <li className='cursor-pointer'>Home</li>
                  <li className='cursor-pointer'>About</li>
                  <li className='cursor-pointer'>Support</li>
                  <li className='cursor-pointer' >Platform</li>
                  <li className='cursor-pointer'>Pricing</li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
              <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
              <button className='px-8 py-3'>Sign Up</button>
            </div>
            <div className='md:hidden mr-4' onClick={handleClick}>
              {!nav ? <Bars3Icon className='w-5 cursor-pointer' /> :<XMarkIcon className='w-5 cursor-pointer'/>}
            
            </div>
        </div>
       
        <ul className={!nav ? 'hidden' :'absolute bg-zinc-200 w-full px-8'}>
        <li className='border-b-2 border-zinc-300 w-full cursor-pointer'>Home</li>
                  <li className='border-b-2 border-zinc-300 w-full  cursor-pointer '>About</li>
                  <li className='border-b-2 border-zinc-300 w-full cursor-pointer'>Support</li>
                  <li className='border-b-2 border-zinc-300 w-full cursor-pointer' >Platform</li>
                  <li className='border-b-2 border-zinc-300 w-full cursor-pointer'>Pricing</li>
                  <div className='flex flex-col my-4'>
                    <button className='text-black px-8 py-3 mb-4 bg-transparent'>Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                  </div>
        </ul>
    </div>
  )
}

export default Navbar