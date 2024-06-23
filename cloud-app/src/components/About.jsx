import React from 'react'

const About = () => {
  return (
    //{/*Outer most div*/}
    <div className='w-full my-32'>
        {/*Container*/}
        <div className='max-w-[1240px] mx-auto'>
           <div className='text-center'>
              <h2 className='text-5xl font-bold'>Trusted by developers across the world</h2>
              <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur  elit. 
               Tempora aut ipsum beatae quidem sint nihil  adipisicing
               dignissimos commodi, laudantium numquam sapiente?</p>
           </div>

           <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                 <div className='border py-8 rounded-xl shadow-xl'>
                      <p className='text-indigo-600 text-6xl font-bold  '>100%</p>
                      <p className='text-gray-400 mt-2'>Completion</p>
                 </div>
                 <div className='border py-8 rounded-xl shadow-xl'>
                      <p className='text-indigo-600 text-6xl font-bold  '>24/7</p>
                      <p className='text-gray-400 mt-2'>Delivery</p>
                 </div>
                 <div className='border py-8 rounded-xl shadow-xl'>
                      <p className='text-indigo-600 text-6xl font-bold  '>100K</p>
                      <p className='text-gray-400 mt-2'>Transactions</p>
                 </div>
           </div>
        </div>
    </div>
  )
}

export default About