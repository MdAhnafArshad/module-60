import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';



const Header = () => {

    const {user, userLogOut } = useContext(authContext);
    console.log(user);

    // sign out function
    const handleSignOut = () => {
        userLogOut()
            .then(() => {
                console.log('LogOut Successfully');
            })
            .catch(error => {
                console.log(error.message);
            })
    };

    return (
        <nav className="navbar bg-base-100">
            <Link to="/" className="btn btn-ghost normal-case text-xl">FIre Master</Link>
            <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
            <Link to="/login" className="btn btn-ghost normal-case text-xl">Login</Link>
            <Link to="/register" className="btn btn-ghost normal-case text-xl">Register</Link>
            <Link to="/orders"  className="btn btn-ghost normal-case text-xl">orders</Link>
            <Link to="/profile" className="btn btn-ghost normal-case text-xl">profile</Link>


            {
                user  ?<>  <h2 className='m-3'>{user.email}</h2> <button onClick={handleSignOut} className="btn btn-xs">Sign out</button></> : <Link to="/login">Login</Link>
            }
            
            
        </nav>
    );
};

export default Header;