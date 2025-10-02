import React, { useState } from 'react'
import { login } from '../api/login'
import toast from 'react-hot-toast'

const LoginCard = () => {

  const [email, setemail] = useState('')
  const [password , setpassword] = useState('')

 

  const handlesubmit = async (event) => {
   
     
     event.preventDefault();
     const formdata = {
        'email' :email,
        'password' : password
     }

     console.log('formdata' ,formdata)

     try {
       
        // validations
        if(!formdata.email || !formdata.password )
         { 
            return toast.error('fill all the required fields')
            
         }
        // email and password is not there 
        // password validations min length 

        if(formdata.password.length < 6)
        {   
            return toast.error('password length is missing')
           
        }
        // call login 
        const {email ,password} = formdata
        const sendata = await login(email , password)
        console.log(sendata)

        if(sendata.status === 200)
        {   
            toast.success('Login sucessful')
            console.log('Login successful!');
            // Show success toast
            // Redirect to dashboard
        }
        else{
            console.log('login failed')
        }

    
     } catch (error) {
        console.log('error',error)
        console.log('error while Submiteed form')
     }
  }


  return (
    <div className='w-[720px] h-[304px]'>
       
        <div className='w-[576px] h-[304px] mx-auto flex-col gap-5'>
           <p className='font-inter font-bold text-xl leading-tight tracking-normal text-gray-900'> Welcome back</p>
        
        <form 
         onSubmit={handlesubmit}
         className=''>
            

              <div className='flex-col space-y-2'>
                 <div> 
                     <label
                       htmlFor='emailfield'
                       className='font-inter font-medium text-sm leading-relaxed tracking-normal text-gray-900 '
                     > Email </label>
                 </div>
                 
                    <input
                        className='w-[576px] h-[42px] rounded-lg px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                        type='email'
                        id='emailfield'
                        placeholder='name@example.com'
                        value={email}
                      
                        onChange={(e) => setemail(e.target.value)}
                    />
              </div>

             
              <div className='flex-col space-y-2'>
                <div> 
                     <label
                     htmlFor='passwordfield'
                       className='font-inter font-medium text-sm leading-relaxed tracking-normal text-gray-900 '
                      > Password </label>
                 </div>
                <input
                    className='w-[576px] h-[42px] rounded-lg px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                    type='password'
                    id='passwordfield'
                    placeholder='*****'
                    minLength={6}
                  
                    value={password}
                    onChange={(e)=> setpassword(e.target.value)}
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
                  type='submit'
                  className='font-inter font-medium text-sm leading-relaxed tracking-normal text-white '
                 > Sign In </button>
            </div>
 
             

           </form>
        </div>

    </div>
  )
}

export default LoginCard