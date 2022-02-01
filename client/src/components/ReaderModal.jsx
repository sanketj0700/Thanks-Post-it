import React, {useState, useEffect} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../styles/CardModal.css';
import ReadOnlyBadge from './ReadOnlyBadge';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

function ReaderModal({open, setOpen, card}) {
    const [scroll, setScroll] = useState('paper');
    const badges = card.badges;
    const handleOnCancel = () => {
        setOpen(false);
    }
    const handleOnOk = () => {
        setOpen(false);
    }
  return (
  <div className='modal'>
    <Dialog
    open = {open}
    scroll = {scroll}
    aria-labelledby="scroll-dialog-title"
    aria-describedby="scroll-dialog-description"
    className = 'modal-dialog'
    >
        <DialogTitle className = 'modal-title'>{card.title}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
            <div className = 'modal-image-container'>
                <img src="thank-you.gif" alt="logo" className = 'modal-image'/>
            </div>
            <div className = 'author-display'>
                <p className = 'modal-author'>Written by: 
                    <Chip
                        avatar={<Avatar alt={card.user} src="logo192.png" />}
                        label={card.user}
                        variant="outlined"
                        style = {{margin: '0px 5px'}}
                    /> 
                </p>
                <p className = 'modal-dedicated'>Dedicated to: 
                    <span className = 'receiver'>
                        {card.dedicated.map((name, index)=>{
                            return <Chip
                            key={index}
                            avatar={<Avatar alt={name} src="logo192.png" />}
                            label={name}
                            variant="outlined"
                            style = {{margin: '0px 5px'}}
                          /> 
                        })}
                    </span>
                </p>
            </div>
            <p className = 'modal-date'>Created on : <span className='date'>2022-02-01</span></p>
            <DialogContentText tabIndex={-1}>
                {card.text}
            </DialogContentText>
            <div className='modal-badges-display'>
                <h4 className='badges-title'>Badges</h4>
                <ul className='badges'>
                {badges.map(badge => (
                    <ReadOnlyBadge badge={badge} key = {badge}/>
                ))}
                </ul>
            </div>
        </DialogContent>
        <DialogActions>
            {/* <button onClick={handleOnCancel}>Cancel</button> */}
            <button onClick = {handleOnOk} className='modal-button'>Ok</button>
        </DialogActions>
    </Dialog>
  </div>
  );
}

export default ReaderModal;
