import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return <div className='navbar'>
    <Link to='/' style={{textDecoration: 'none'}}>
      <h2 className='nav-brand'>
        Thanks Post It
      </h2>
    </Link> 
      <ul className='nav-items'>
          <li className='profile-item'>
            <Link className='profile-link-active' to='/profile' style={{textDecoration: 'none',color:'black'}}>Profile</Link>
          </li>
          <li>Logout</li>
      </ul>
  </div>
  <EditorModal open = {open} setOpen = {setOpen} cardList = {cardList} setCardlist ={setCardlist}/>
  </>
  )
}

export default Navbar;
