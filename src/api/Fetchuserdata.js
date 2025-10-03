export const fetchUserdata= async() => {
   try {
    const data = await fetch('https://timesheet-backend-fz99.onrender.com/userdata')
    const res = await data.json()
    console.log(res.data)
    return res.data
    
   } catch (error) {
      console.log('error' ,error)
   }
}


