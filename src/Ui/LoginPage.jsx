import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/createSlice';
import { NavLink, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // submit form 
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login());
        navigate('/');
    };

    return (
        <div className='container'>
            <form method='POST' action='/contact' onSubmit={handleSubmit} className='form'>
                <div className='bordering'>
                    <h1 className='center'>Login</h1>
                    <p className='Mailchimp'>Need a Mailchimp account? <span className='yellow'>Create an account</span></p>
                    <div>
                        <input type="email" name="email" id='email' placeholder="enter your email" required autoComplete='off' />
                    </div>
                    <div>
                        <input type="password" name="password" id='password' placeholder="enter your Password" required autoComplete='off' />
                    </div>
                    <div className='flexing'>
                        <NavLink><p>reset</p></NavLink>
                        <NavLink><p>Forgot Password</p></NavLink>
                    </div>
                    <button type="submit" className="button-85" role="button" style={{ marginTop: "0.8rem" }}>Login</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
