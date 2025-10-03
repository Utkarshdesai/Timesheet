import React from 'react'
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='flex justify-between h-[68px] w-screen items-center p-3'>
        <div className='flex items-center gap-4'>
             <p className=' font-inter font-semibold text-2xl leading-[150%] tracking-normal text-gray-900'> Ticktok </p>
             <p className='font-inter font-medium text-sm leading-[150%] tracking-normal text-center text-gray-900'> Timesheets </p>
        </div>
       
       <div className='flex'>
         <p className='font-inter font-medium text-base leading-[150%] tracking-normal text-gray-500'> username </p>
         <ChevronDown 
           className='text-gray-500'
         />
       </div>
      
    </div>
  )
}

export default Navbar