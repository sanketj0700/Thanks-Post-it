import React from 'react';
import '../styles/Navbar.css';
function Navbar() {
  return <div className='navbar'>
      <h2 className='nav-brand'>Thanks Post It</h2> 
      <ul className='nav-items'>
          <li>Profile</li>
          <li>Logout</li>
      </ul>
  </div>;
}

export default Navbar;
