import React from 'react'
import LoginCard from '../components/LoginCard'

const Home = () => {

    console.log(sessionStorage)
  return (
    <div className='flex flex-row '> 
        <div className='w-[50%] flex justify-center items-center'> 
            <LoginCard/>
        </div>
        
        <div className=' bg-[#1C64F2] w-[50%] h-screen flex items-center justify-center'> 
            
               <div className=' w-[576px] h-[168px]'> 
                   <div>
                       <p className='font-inter font-semibold text-4xl leading-[1.5] tracking-normal align-middle text-white'> ticktock </p>
                   </div>
                 <div>
                    <p className=' font-inter font-normal text-base leading-relaxed tracking-normal text-gray-200'>   
                        Introducing ticktock, our cutting-edge timesheet web application designed to revolutionize 
                        how you manage employee work hours. With ticktock, 
                        you can effortlessly track and monitor employee attendance 
                        and productivity from anywhere, anytime, using any internet-connected device. </p>
                 </div>
                
              </div>
        </div>
    </div>
  )
}

export default Home