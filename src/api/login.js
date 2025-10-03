
const email1 = 'abc@gmail.com'
const password1 = 123456

export const login = async (email , password) => {
    //get formdata 
    const Email = email.toLowerCase().trim();
    //fetch data from endpoints -> todo
    //try catch 
    try {
      
    // check user is autheticated 

    //match email and password 
    if(email1 != Email || password1!= password)
   {   
       

       return {
        status: 401,
        message: 'Invalid email or password'
      };
    }

    //create seesion token 
    sessionStorage.setItem('email' , 'e1234')
    sessionStorage.setItem('password' , 11111)

    console.log(sessionStorage)

    //save token 

    //send response to frontend 
    const response ={
        'status' :200,
        'message' : 'user is login sucessfully' ,
        //send token 
    }

    return response


    } catch (error) {
       console.log(error)
       console.log('user is not aunticated ') 
       const response = {
        'status' : 500,
        'message' : 'user login failed' ,
        //send token 
      }
      console.log(response)
      
    }
    

}