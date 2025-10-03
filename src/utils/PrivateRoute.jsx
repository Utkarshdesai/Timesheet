// components/PrivateRoute.js
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = sessionStorage.getItem('token'); 
  
  console.log('PrivateRoute - Token exists:', !!token);
  
  if (!token) {
    console.log('No token, redirecting to home...');
    return <Navigate to="/" replace />;
  }
  
  console.log('Token found, rendering children...');
  return children;
};

export default PrivateRoute;