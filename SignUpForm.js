import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    // const navigate = useNavigate();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Submit logic here

    //     // Redirect to login page
    //     navigate('/login');
    // };


    return (
        <div className="container">
            <h1>Signup Form</h1>
            <form >
                {/* <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" />
                </div> */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default SignupForm;
