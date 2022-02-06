import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from '@mui/material/Avatar';
import '../styles/LoginButton.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()} className="log-in-button">
    <Avatar 
    src = {'https://i0.wp.com/www.techjunkie.com/wp-content/uploads/2020/11/How-to-Change-the-Google-Logo.jpg?fit=1200%2C666&ssl=1'}
    style = {{width: '30px', height: '30px'}}
    /> Sign in with Google</button>;
};

export default LoginButton;