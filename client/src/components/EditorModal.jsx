import React, {useState, useEffect} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Autocomplete, TextField, InputBase } from '@mui/material';
import ImageUploadModal from './ImageUploadModal';
import '../styles/CardModal.css';
import '../styles/EditorModal.css';

function EditorModal({open, setOpen}) {
    const [scroll, setScroll] = useState('paper');
    const [openUpload, setOpenUpload] = useState(false);
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
        <DialogTitle className = 'modal-title'>
            <input placeholder='Thank you ....'></input>
        </DialogTitle>

        <DialogContent dividers={scroll === 'paper'}>
            <div className = 'modal-image-container'>
                <img src="thank-you.gif" alt="logo" className = 'modal-image'/>
            </div>
            
            <div className="modal-dedicated-to-container">
                <Autocomplete
                    className = 'dedicated-to-input'
                    renderInput={(params) =>
                        <TextField {...params}
                            label="Dedicated to"
                        variant="outlined"
                            style={{ maxWidth: '70%' }}
                        />}
                />
            </div>
            
            <DialogContentText tabIndex={-1} className = 'note-container'>
                <InputBase 
                    className = 'note-input'
                    type='textarea' placeholder='Dear xyz thank you ....'
                    fullWidth multiline
                />
            </DialogContentText>
            <div className='modal-badges-display'>
                <h4 className='badges-title'>Badges</h4>
                <ul className='badges'>
                    <li className='badge'>
                        <input type = 'checkbox' id = 'Badge 1' name = 'badge1' value = 'Badge 1' />
                        <label for = 'Badge 1'>Badge 1</label>
                    </li>
                    <li className='badge'>
                        <input type = 'checkbox' id = 'Badge 2' name = 'badge2' value = 'Badge 2' />
                        <label for = 'Badge 2'>Badge 2</label>
                    </li>
                    <li className='badge'>
                        <input type = 'checkbox' id = 'Badge 3' name = 'badge3' value = 'Badge 3' />
                        <label for = 'Badge 3'>Badge 3</label>
                    </li>
                    <li className='badge'>
                        <input type = 'checkbox' id = 'Badge 4' name = 'badge4' value = 'Badge 4' />
                        <label for = 'Badge 4'>Badge 4</label>
                    </li>
                    <li className='badge'>
                        <input type = 'checkbox' id = 'Badge 5' name = 'badge5' value = 'Badge 5' />
                        <label for = 'Badge 5'>Badge 5</label>
                    </li>
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

export default EditorModal;
