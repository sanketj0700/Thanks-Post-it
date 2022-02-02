import { getThemeProps } from '@mui/system';
import React, { Fragment, useEffect, useState } from 'react';
import '../styles/Navbar.css';
import EditorModal from './EditorModal';
// import { useState } from 'react';
import Card from './Card'
import Home from './Home';


function Navbar({cardList, setCardlist}) {
  const [open, setOpen] = useState(false);
    const handleOnClick = () => {
        setOpen(true);
    }
  return (
  <>
  <div className='navbar'>
      <h2 className='nav-brand'>Thanks Post It</h2> 
      <ul className='nav-items'>
          <li><button class = "AddButton" onClick={handleOnClick}><i class="fas fa-plus"></i></button></li>
          <li>Profile</li>
          <li>Logout</li>
      </ul>
  </div>
  <EditorModal open = {open} setOpen = {setOpen} cardList = {cardList} setCardlist ={setCardlist}/>
  </>
  )
}

export default Navbar;
