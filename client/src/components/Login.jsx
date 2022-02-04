import React from 'react';
import  { Navigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import Loading from './Loading';

import '../styles/Login.css'
import userLogo from '../Icon awesome-user-circle.svg';

function Login() {

  const {isAuthenticated, isLoading} = useAuth0();

  if(isAuthenticated) {
    return <Navigate to='/home'  />
  }

  if(isLoading) {
    return <Loading />
  }
  
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
