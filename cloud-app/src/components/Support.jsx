import { PhoneIcon,ArrowSmallRightIcon, CpuChipIcon, LightBulbIcon} from '@heroicons/react/24/solid'
import SupportImg from '../assets/support.jpg';
import React from 'react'

const Support = () => {
  return (
    <div className='w-full  mt-24'>
         <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full  h-full object-cover mix-blend-overlay'src={SupportImg} alt="/" />
         </div>

          <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12 '>
              <h2 className='pt-8 text-3xl text-slate-300 uppercase text-center'>Support</h2>
              <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
              <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae sapiente, 
                mollitia optio eveniet harum officia animi eaque. Iusto iure totam modi des
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                   
                   <div className='bg-white rounded-xl shadow-2xl '>
                      <div className='p-8'>  
                        <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] ' />
                        <h3 className='font-bold text-2xl my-6'>Sales</h3>
                        <p className='text-gray-600 text-xl '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis   
                          numquam assumenda quis est fugiat dolor, perspiciatis quaerat?</p>
                      </div>

                      <div className='bg-slate-100 pl-8 py-4'> 
                        <p className='text-indigo-600 flex items-center'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2'/></p>
                      </div>
                   </div>
                   <div className='bg-white rounded-xl shadow-2xl '>
                      <div className='p-8'>  
                        <LightBulbIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] ' />
                        <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                        <p className='text-gray-600 text-xl '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis   
                          numquam assumenda quis est fugiat dolor, perspiciatis quaerat?</p>
                      </div>

                      <div className='bg-slate-100 pl-8 py-4'> 
                        <p className='text-indigo-600 flex items-center'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2'/></p>
                      </div>
                   </div>
                   <div className='bg-white rounded-xl shadow-2xl '>
                      <div className='p-8'>  
                        < CpuChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] ' />
                        <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                        <p className='text-gray-600 text-xl '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis   
                          numquam assumenda quis est fugiat dolor, perspiciatis quaerat?</p>
                      </div>

                      <div className='bg-slate-100 pl-8 py-4'> 
                        <p className='text-indigo-600 flex items-center'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2'/></p>
                      </div>
                   </div>
            </div>
          </div>
    </div>
  )
}

export default Support