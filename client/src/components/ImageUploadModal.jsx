import {Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle} from '@mui/material';
import {useState} from 'react';
import '../styles/CardModal.css';
const ImageUploadModal = ({openUpload, setOpenUpload, setImage})=>{

    const handleOnUpload = ()=>{
        setOpenUpload(false);
    }
 return (
    <Dialog
    open = {openUpload}
    aria-labelledby="scroll-dialog-title"
    aria-describedby="scroll-dialog-description"
    className = 'modal-dialog'
    >
        <DialogTitle className = 'modal-title'>
            <h2>Upload Image or GIF</h2>
        </DialogTitle>

        <DialogContent>
            <DialogContentText tabIndex={-1} className = 'note-container'>
                <input type = 'file' />
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <button className = 'modal-button' onClick={()=> setOpenUpload(false)}> Cancel </button>
            <button className='modal-button' onClick={handleOnUpload}>Upload</button>
        </DialogActions>
    </Dialog>
 );
}

export default ImageUploadModal;