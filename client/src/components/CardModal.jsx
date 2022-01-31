import React, {useState, useEffect} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function CardModal({open, setOpen}) {
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
    >
        <DialogTitle>Title</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
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
        </DialogContent>
        <DialogActions>
            <button onClick={handleOnCancel}>Cancel</button>
            <button onClick = {handleOnOk}>Ok</button>
        </DialogActions>
    </Dialog>
  </div>
  );
}

export default CardModal;
