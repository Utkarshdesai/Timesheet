import { fetchUserdata } from "./Fetchuserdata";

export const login = async (email , password) => {

    console.log(email , password )
 
    const useremail = email.toLowerCase().trim();
    const userdata  = await fetchUserdata()

   //Access the first user object from the array
        const user = userdata[0]; 
        console.log('User data:', user.Email, user.Password);
  
     
   try {
    //match email and password 
    if(useremail !==  user.Email || password !== user.Password)
   {   
        return {
        status: 401,
        message: 'Invalid email or password'
      };
    }

    //create seesion token 
    const token = `token_${Date.now()}_${user.Email}`;

    //saved token in sessions
    sessionStorage.setItem('token' , token)
    sessionStorage.setItem('email' , user.Email)
    sessionStorage.setItem('password', user.Password)

    console.log(sessionStorage)

    //send response to frontend 
    const response = {
        'status' :200,
        'message' :'user is login sucessfully' ,
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