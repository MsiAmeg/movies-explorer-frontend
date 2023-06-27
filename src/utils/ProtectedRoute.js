import {useContext} from 'react';
import { LoginContext } from '../contexts/LoginContext.js';
import {Navigate} from 'react-router-dom';
 const ProtectedRoute = ({element: Component, ...props}) => {
    const { loggedIn } = useContext(LoginContext);

    return (
        loggedIn ? <Component {...props} /> : <Navigate to="/login-in" replace/>
    );
 }

 export default ProtectedRoute;