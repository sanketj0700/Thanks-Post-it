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
        <div className='login-page'>
          <div className = 'login-sidebar'>
            <img src = 'thanks.jpg' alt = 'thanks-svg' className='thanks-image'/>
          </div>
          <div className='login-container'>
            <div className='login-wrapper'>
                <h1 className='signin-text'>Sign in to Thanks Post It</h1> 
                <p className='greeting-login'>Welcome to Thanks Post it! Please use your @searce.com email to sign in.</p>
                <LoginButton />
            </div>
          </div>
        </div>
      </>
  );
}

export default Login;
