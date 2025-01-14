import React from 'react'
import {CloudIcon,ServerIcon,PaperAirplaneIcon,DocumentIcon} from '@heroicons/react/24/solid';
import bgImage from '../assets/cyber-bg.png';


const Hero = () => {
  return (
    <div className='w-full h-screen justify-between bg-zinc-200 flex flex-col'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
             <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Unique Sequencing & Production</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
                <p className='text-2xl'>This is our Tech Brand.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Getting Started</button>
             </div>
                    <div>
                      <img className='w-full' src={bgImage} alt="/" />
                    </div>
             <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl 
                           text-center shadow-xl '>
                 <p>Data Services</p>
                 <div className='flex justify-between px-4 flex-wrap '>
                          <p className='flex px-4 py-4 text-slate-600'>< CloudIcon className='h-6 text-indigo-600'/> App Security</p>
                          <p className='flex px-4 py-4 text-slate-600'>< DocumentIcon className='h-6 text-indigo-600'/> Dashboard Design</p>
                          <p className='flex px-4 py-4 text-slate-600'>< ServerIcon className='h-6 text-indigo-600'/> Cloud Data</p>
                          <p className='flex px-4 py-4 text-slate-600'>< PaperAirplaneIcon className='h-6 text-indigo-600'/> API</p>
                  </div>
             </div>
             
        </div>
    </div>
  )
}

export default Hero