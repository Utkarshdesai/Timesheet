import React from 'react'
import { Hash } from 'lucide-react';
import { MoveDown } from 'lucide-react';
// Example data structure


const UserTimeshettTable = ({timesheetdata}) => {
  return (
    <div>
       <table className="w-full">
    <thead>
      <tr className="border-b border-gray-200 bg-gray-50 text-left w-[1284px] h-[50px]">
        <th className="text-left pl-[4px] p-4 w-[107px] h-[50px] flex justify-between">
          <div className='flex'>
            <p className='font-inter font-semibold text-xs uppercase leading-[150%] tracking-normal text-gray-500'> Week </p>
           <Hash
            className='h-[18px] w-[15px] text-gray-500 ml-0'
          />
          </div>
          
          <div>
            <MoveDown
           className='h-[18px] w-[15px] text-[#6B7280] ml-4'
          />
          </div>
         
        </th>
        <th className="text-left p-4 w-[502px] h-[50px] flex-row justify-between">

           <div className='flex'>
            <p className='font-inter font-semibold text-xs uppercase leading-[150%] tracking-normal text-gray-500'> Date </p>
           
           <MoveDown
           className='h-[18px] w-[15px] text-[#6B7280] ml-4'
          />
          
          </div>
          
          
          
          

        </th>
        <th className="text-left p-4 w-[520px] h-[50px] justify-between">

           <div className='flex'>
            <p className='font-inter font-semibold text-xs uppercase leading-[150%] tracking-normal text-gray-500'> Status </p>
           
           <MoveDown
           className='h-[18px] w-[15px] text-[#6B7280] ml-4'
          />
          
          </div>


        </th>
        <th className="text-left p-4 w-[121px] h-[50px] "> 
            <div className='flex'>
            <p className='font-inter font-semibold text-xs uppercase leading-[150%] tracking-normal text-gray-500'> Actions </p>
           
          </div>

        </th>
      </tr>
    </thead>
    <tbody>
     
      {timesheetdata.map((item) => (
        <tr key={item.id} className="border-b border-gray-200  h-[54px]">
          <td className="p-4">
            <p className='font-inter font-normal text-sm leading-[150%] tracking-normal text-gray-900'> {item.week}</p>
          </td>
          <td className="p-4">
            <p className='font-inter font-normal text-sm leading-[150%] tracking-normal text-gray-500'>  {item.Date} </p>
            
          </td>
          <td className="p-4  ">
            <div className='w-[95px] h-[22px] bg-green-100 rounded-md flex items-center justify-center'>
              
                   <p className='inline-block w-[75px] h-[18px] font-inter font-medium text-xs leading-[150%] tracking-normal text-center  text-green-800'>  {item.status}</p>
           </div>
           
          </td>
          <td className="p-4">
            <p className='font-inter font-normal text-base leading-[125%] tracking-normal text-[#1C64F2]'> {item.action} </p>
            
          </td>
        </tr>
      ))}
    </tbody>
  </table>

    </div>
  )
}

export default UserTimeshettTable