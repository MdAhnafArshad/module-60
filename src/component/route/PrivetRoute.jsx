import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../../Provider/AuthProvider';

const PrivetRoute = ({children}) => {


    const {user, loading} = useContext(authContext);

    if(loading){
        return <progress className="progress progress-error w-56" value="100" max="100"></progress>;
    }

    if(user){
        return children;
    }
    return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivetRoute;