import { CheckIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Pricing = () => {
  return (
    <div className='w-full my-24 text-white'>
        <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay '></div>

        <div className='max-w-[1240px] mx-auto py-12 '>
            <div className='text-center py-8 text-slate-300'>
                <h2 className='tet-3xl uppercase'>Pricing</h2>
                <h3 className='text-5xl font-bold py-8 text-white'>The right price for your research.</h3>
                <p className='text-3xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aperiam ex labore aspernatur quae omnis non in. Nobis impedit possimus ipsam?</p>
            </div>

            <div className='grid md:grid-cols-2 '>

                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative '>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>STANDARD</span>
                    <div> <p className='font-bold text-6xl flex py-4'> $49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>

                    </div>
                    <p className='text-2xl py-8 text-slate-500'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, quod?</p>
                      <div className='text-2xl '>
                        <p className='flex py-4'> <CheckIcon className='w-7 mr-5 text-green-600'/> Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-4'> <CheckIcon className='w-7 mr-5 text-green-600'/> Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-4'> <CheckIcon className='w-7 mr-5 text-green-600'/> Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-4'> <CheckIcon className='w-7 mr-5 text-green-600'/> Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-4'> <CheckIcon className='w-7 mr-5 text-green-600'/> Lorem ipsum dolor sit amet.</p>
                        <button className='w-full py-4 my-4'>Get Started</button>
                      </div>
                    
                </div>
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative '>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>PREMIUM</span>
                    <div> <p className='font-bold text-6xl flex py-4'> $99<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>

                    </div>
                    <p className='text-2xl py-8 text-slate-500'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, quod?</p>
                      <div className='text-2xl '>
                        <p className='flex py-4'> <CheckIcon className='w-7 mr-5 text-green-600'/> Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-4'> <CheckIcon className='w-7 mr-5 text-green-600'/> Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-4'> <CheckIcon className='w-7 mr-5 text-green-600'/> Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-4'> <CheckIcon className='w-7 mr-5 text-green-600'/> Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-4'> <CheckIcon className='w-7 mr-5 text-green-600'/> Lorem ipsum dolor sit amet.</p>
                        <button className='w-full py-4 my-4'>Get Started</button>
                      </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing