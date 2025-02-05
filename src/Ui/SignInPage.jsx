import React from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../store/createSlice';
import { NavLink, useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn());
        navigate('/');
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='form'>
                <div className='bordering'>
                    <h1 className='center'>Sign In</h1>
                    <p className='Mailchimp'>Need a Mailchimp account? <NavLink><span className='yellow'>Create an account</span></NavLink></p>
                    <div>
                        <input type="email" placeholder="enter your email" required autoComplete='off' />
                    </div>
                    <div>
                        <input type="password" placeholder="enter your Password" required autoComplete='off' />
                    </div>
                    <div className='flexing'>
                        <NavLink><p>reset</p></NavLink>
                        <NavLink><p>Forgot Password</p></NavLink>
                    </div>
                    <button type="submit" className="button-85" role="button" style={{ marginTop: "0.8rem" }}>Sign In</button>
                </div>
            </form>
        </div>
    );
};

export default SignInPage;
