import React from 'react'
import { ChevronDown } from 'lucide-react';
import Footer from './Footer';
import UserTimeshettTable from './UserTimeshettTable';

const TimesheetTable = () => {
  return (
   <div> 
    <div className='mx-auto mt-[27px] w-[1280px] h-[648px] p-6 opacity-100
      space-y-3
      shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]
     '>
        <p className='font-inter font-bold text-2xl leading-6 tracking-normal text-gray-900 gap-2'> Your Timesheets </p>
        <div className='flex h-[42px] gap-x-2.5 mb-2.5'>
            <div className='flex w-[152px] h-[42px] p-[3px] gap-[10px] opacity-100 rounded-lg border border-gray-300 items-center justify-center'>
                 <p className='font-inter font-normal text-sm leading-[125%] tracking-normal align-middle text-gray-500 text-left'> Date Range</p>
                 <ChevronDown 
                  className='text-gray-500'
                 />
            </div>
            <div className='flex w-[152px] h-[42px] p-[3px] gap-[10px] opacity-100 rounded-lg border border-gray-300 items-center justify-center'>
                 <p className='font-inter font-normal text-sm leading-[125%] tracking-normal align-middle text-gray-500 text-left'> Status </p>
                 <ChevronDown 
                  className='text-gray-500 '
                 />
            </div>
        </div>

        <UserTimeshettTable/>
        
        <div className='flex justify-between '>
            <div className='flex w-[118px] h-[36px] gap-1.5 opacity-100 rounded-base justify-center items-center p-2 px-3 border border-gray-300 bg-gray-50 shadow-custom'>
                 <p className='font-sans font-medium text-sm leading-5 tracking-normal text-[#4A5565]'> 5 per page </p>
                 
                 <ChevronDown
                  className='w-4 h-4 text-[#4A5565] text-center mt-1'

                  />

            </div>
           
            <div className='flex'> 
                <div className='w-[82px] h-[36px] gap-1.5 opacity-100 py-2 px-3 border border-gray-300 bg-white rounded-l-md rounded-r-none'> 
                    <p className='font-base font-medium text-sm leading-5 tracking-normal text-[#4A5565]'> 
                        Previous
                    </p>
                </div>
                <div className='w-[36px] h-[36px] gap-1.5 opacity-100 rounded-none py-2 px-3 border border- border-gray-300 bg-white'> 
                    <p className='font-base font-medium text-sm leading-5 tracking-normal text-[#4A5565]'> 1 </p>
                </div>

                 <div className='w-[36px] h-[36px] gap-1.5 opacity-100 rounded-none py-2 px-3 border border- border-gray-300 bg-white'> 
                    <p className='font-base font-medium text-sm leading-5 tracking-normal text-[#4A5565]'> 2 </p>
                </div>

                 <div className='w-[36px] h-[36px] gap-1.5 opacity-100 rounded-none py-2 px-3 border border- border-gray-300 bg-white'> 
                    <p className='font-base font-medium text-sm leading-5 tracking-normal text-[#4A5565]'> 3 </p>
                </div>

                 <div className='w-[36px] h-[36px] gap-1.5 opacity-100 rounded-none py-2 px-3 border border- border-gray-300 bg-white'> 
                    <p className='font-base font-medium text-sm leading-5 tracking-normal text-[#4A5565]'> 4 </p>
                </div>
               
                 <div className='w-[56px] h-[36px] gap-1.5 opacity-100 py-2 px-3 border border-gray-300 bg-white rounded-l-none rounded-r-md'> 
                    <p className='font-base font-medium text-sm leading-5 tracking-normal text-[#4A5565]'> 
                        Next
                    </p>
                </div>
            </div>
        </div>
        
       
      
      
    </div>
    <Footer/>
    </div>
  )
}

export default TimesheetTable