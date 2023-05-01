import React , { useContext } from 'react';
import {  authContext } from '../Provider/AuthProvider';

const Home = () => {

    const {user, userLogOut} = useContext(authContext);
    console.log(user);
    console.log(userLogOut);



    return (
        <div>
            <h2>Home </h2>
            {
                  user && <h2>{user?.email}</h2>
            }
        </div>
    );
};

export default Home;