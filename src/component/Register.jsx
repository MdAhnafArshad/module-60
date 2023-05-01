import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const Register = () => {


    const {user, createUser} = useContext(authContext);
    console.log(user);

    const handelRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log( name, email, password);

        createUser(email, password)
        .then(result => {
            const logUser = result.user;
            console.log(logUser);
        })
        .catch(error => {
            console.error(error.message);
        });

        form.reset()
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Please, Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Form onSubmit={handelRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
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
                                <Link to="/login" className="label-text-alt link link-hover">already have an account!</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;