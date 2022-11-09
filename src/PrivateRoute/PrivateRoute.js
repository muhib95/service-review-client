import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../AuthContext/AuthContext';

const PrivateRoute = ({children}) => {
   
        const {user,loading}=useContext(UserContext);
        let location =useLocation();
        if(loading){
                return <h2>Loading...</h2>
        }
        if(user){
            return children;
    
        }
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;