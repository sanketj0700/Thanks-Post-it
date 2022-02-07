import { Link } from 'react-router-dom';
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import '../styles/Navbar.css';

function Navbar() {

  const { logout, isAuthenticated } = useAuth0();

  if(isAuthenticated){
    return(
      <div className='navbar'>
        <Link to='/home' style={{ textDecoration: 'none' }}>
          <h2 className='nav-brand'>
            Thanks Post It
          </h2>
        </Link>

        <ul className='nav-items'>
          <li className='profile-item'>
            <Link className='profile-link-active' to='/profile' style={{ textDecoration: 'none', color: 'black' }}>Profile</Link>
          </li>
          <li onClick={() => logout({ returnTo: process.env.REACT_APP_ENV === 'production'? 'https://thanks-post-it.vercel.app/' : 'http://localhost:3000/' })} className='log-out-button'>Logout</li>
        </ul>
      </div>
    )
  }
  else{
    return <></>;
  }
  
}

export default Navbar;
