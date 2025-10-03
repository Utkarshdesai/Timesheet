import { fetchUserdata } from "./Fetchuserdata";

export const login = async (email , password) => {
 
    const useremail = email.toLowerCase().trim();
    const userdata = await fetchUserdata()
    const {Email , Password} = userdata
  
    try {
    //match email and password 

    if(useremail != Email || password!= Password)
   {   
        return {
        status: 401,
        message: 'Invalid email or password'
      };
    }

    //create seesion token 
    const token = `token_${Date.now()}_${Email}`;

    //saved token in sessions
    sessionStorage.setItem('token' , token)
    sessionStorage.setItem('email' , Email)
    sessionStorage.setItem('password', Password)

    console.log(sessionStorage)

    //send response to frontend 
    const response = {
        'status' :200,
        'message' : 'user is login sucessfully' ,
         token 
    }

    return response


    } catch (error) {
       console.log(error)
       console.log('user is not aunticated ') 
       const response = {
        'status' : 500,
        'message' : 'user login failed' ,
       
      }
      console.log(response)
      
    }
    

}