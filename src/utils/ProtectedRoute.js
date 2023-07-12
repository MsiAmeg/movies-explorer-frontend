import { useContext } from 'react';
import { LoginContext } from '../contexts/Login.js';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({ element: Component, ...props }) => {
  const { loggedIn } = useContext(LoginContext);

  return (
    loggedIn ? <Component {...props} /> : <Navigate to="/" replace />
  );
}

export default ProtectedRoute;
