import React, {useState} from 'react';
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
                <img src= {card.image} alt="thank-you-image" className = 'modal-image'/>
            </div>
            <p className = 'modal-date'>Created on : <span className='date'>{card.created_at.substr(0, 10)}</span></p>
            <div className = 'author-display'>
                <p className = 'modal-author'>Written by: 
                    <Chip
                        avatar={<Avatar alt={card.author.given_name} src={card.author.picture} />}
                        label={card.author.given_name}
                        variant="outlined"
                        style = {{margin: '0px 5px'}}
                    /> 
                </p>
                <p className = 'modal-dedicated'>Dedicated to: 
                    <span className = 'receiver'>
                        {card.dedicated.map((person, index)=>{
                            return <Chip
                            key={index}
                            avatar={<Avatar alt={person.given_name} src={person.picture} />}
                            label={person.given_name}
                            variant="outlined"
                            style = {{margin: '0px 5px'}}
                          /> 
                        })}
                    </span>
                </p>
            </div>
            
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
