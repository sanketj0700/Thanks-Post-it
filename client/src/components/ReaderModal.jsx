import React, {useState, useEffect} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../styles/CardModal.css';

function ReaderModal({open, setOpen}) {
    const [scroll, setScroll] = useState('paper');
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
        <DialogTitle className = 'modal-title'>Thank You</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
            <div className = 'modal-image-container'>
                <img src="thank-you.gif" alt="logo" className = 'modal-image'/>
            </div>
            <div className = 'author-display'>
                <p className = 'modal-author'>Written by: <span className='author'>Karan</span> </p>
                <p className = 'modal-dedicated'>Dedicated to: <span className = 'receiver'>Sanket</span></p>
            </div>
            <p className = 'modal-date'>Created on : <span className='date'>2022-02-01</span></p>
            <DialogContentText tabIndex={-1}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus eos, quisquam error ullam suscipit,
                perferendis natus sapiente nulla illum modi itaque eius neque adipisci molestias voluptatum esse quia nobis. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Incidunt similique placeat, aliquam debitis sapiente quod, fugit et natus aspernatur illum eius rem odio veniam. Dolore voluptatem cupiditate distinctio sed natus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus eos, quisquam error ullam suscipit,
                perferendis natus sapiente nulla illum modi itaque eius neque adipisci molestias voluptatum esse quia nobis. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Incidunt similique placeat, aliquam debitis sapiente quod, fugit et natus aspernatur illum eius rem odio veniam. Dolore voluptatem cupiditate distinctio sed natus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus eos, quisquam error ullam suscipit,
                perferendis natus sapiente nulla illum modi itaque eius neque adipisci molestias voluptatum esse quia nobis. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Incidunt similique placeat, aliquam debitis sapiente quod, fugit et natus aspernatur illum eius rem odio veniam. Dolore voluptatem cupiditate distinctio sed natus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus eos, quisquam error ullam suscipit,
                perferendis natus sapiente nulla illum modi itaque eius neque adipisci molestias voluptatum esse quia nobis. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Incidunt similique placeat, aliquam debitis sapiente quod, fugit et natus aspernatur illum eius rem odio veniam. Dolore voluptatem cupiditate distinctio sed natus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus eos, quisquam error ullam suscipit,
                perferendis natus sapiente nulla illum modi itaque eius neque adipisci molestias voluptatum esse quia nobis. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Incidunt similique placeat, aliquam debitis sapiente quod, fugit et natus aspernatur illum eius rem odio veniam. Dolore voluptatem cupiditate distinctio sed natus.
            </DialogContentText>
            <div className='modal-badges-display'>
                <h4 className='badges-title'>Badges</h4>
                <ul className='badges'>
                    <li>Badge 1</li>
                    <li>Badge 2</li>
                    <li>Badge 3</li>
                    <li>Badge 4</li>
                    <li>Badge 5</li>
                    <li>Badge 6</li>
                    <li>Badge 7</li>
                    <li>Badge 8</li>

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
