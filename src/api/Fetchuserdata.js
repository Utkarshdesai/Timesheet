export const fetchUserdata= async() => {
   try {
    const data = await fetch('http://localhost:4000/userdata')
    const res = await data.json()
    console.log(res.data)
    return res.data
    
   } catch (error) {
      console.log('error' ,error)
   }
}


