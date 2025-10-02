import React from 'react'

const LoginCard = () => {
  return (
    <div className='w-[720px] h-[304px]'>
       
        <div className='w-[576px] h-[304px] mx-auto flex-col gap-5'>
           <p className='font-inter font-bold text-xl leading-tight tracking-normal text-gray-900'> Welcome back</p>
        
        <form className=''>
            

              <div className='flex-col space-y-2'>
                 <div> 
                     <label
                       className='font-inter font-medium text-sm leading-relaxed tracking-normal text-gray-900 '
                     > Email </label>
                 </div>
                 
                    <input
                        className='w-[576px] h-[42px] rounded-lg px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                        type='email'
                        placeholder='name@example.com'
                    />
              </div>

             
              <div className='flex-col space-y-2'>
                <div> 
                     <label
                       className='font-inter font-medium text-sm leading-relaxed tracking-normal text-gray-900 '
                      > Password </label>
                 </div>
                <input
                    className='w-[576px] h-[42px] rounded-lg px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                    type='password'
                    placeholder='*****'
                /> 
              </div>

            <div className='flex gap-2 w-[576px] h-[16px] mt-2 items-center'>
                <input
                  className="w-4 h-4 rounded border border-gray-300 bg-gray-50"
                 type='checkbox'
                />
                <p 
                 className='font-inter font-medium text-sm leading-none tracking-normal align-middle text-gray-500 '
                 > Remember Me </p>
            </div>

            <div className='space-y-2 mt-2 w-[576px] h-[41px] rounded-lg px-5 py-2.5 bg-[#1A56DB] text-center'>
                <button
                  className='font-inter font-medium text-sm leading-relaxed tracking-normal text-white '
                 > Sign In </button>
            </div>
 
             

           </form>
        </div>

    </div>
  )
}

export default LoginCard