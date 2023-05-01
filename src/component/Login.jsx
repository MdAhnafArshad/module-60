import React, { useState } from 'react';
import { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';



const Login = () => {

    const [display, setDisplay] = useState('')
    const {logUser, userLogOut} = useContext(authContext)


    // collect form data with onSubmit handlers..........
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(form, email, password);



        //login user function........
        logUser( email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setDisplay("success Full Login");
        })
        .catch(error => {
            console.error(error.message);
        })

        form.reset();
    }

    


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Please, Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            <label className="label">

                                <span>{display}</span>

                                <Link to="/register" className="label-text-alt link link-hover">New to Fire Master!</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;