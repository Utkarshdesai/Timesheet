import { Route ,Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import TimeSheet from './pages/TimeSheet'
import PrivateRouteTimesheet from './utils/PrivateRouteTimesheet'
function App() {
  

  return (
    
     
     <div className='w-screen h-screen overflow-x-hidden'>
        <Routes>
          <Route path="/" element={<Home/>} />
         
              <Route path='/timesheet' element={
                <PrivateRouteTimesheet>
                  <TimeSheet></TimeSheet>
                </PrivateRouteTimesheet>
               
              } /> 
      
          <Route path='*' element={<NotFound/>} />
        </Routes>
     </div>
      
    
  )
}

export default App
