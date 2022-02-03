import React from 'react';
import LoginButton from './LoginButton';

import '../styles/Login.css'
import userLogo from '../Icon awesome-user-circle.svg';

function Login() {
  return (
      <>
        <div className='login-container'>
            <img src={userLogo} alt='Hello Amigo' className='image-login'/>
            <p className='greeting-login'>Welcome User</p>
            <p className='continue-with'>Continue with</p>
            <LoginButton />
        </div>
      </>
  );
}

export default Login;
