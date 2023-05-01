import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../../Provider/AuthProvider';

const PrivetRoute = ({children}) => {


    const {user} = useContext(authContext);

    if(user){
        return children;
    }
    return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivetRoute;