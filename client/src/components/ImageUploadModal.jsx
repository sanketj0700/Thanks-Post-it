import {Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle} from '@mui/material';
import {useState} from 'react';
import '../styles/CardModal.css';


function ImageUploadModal({openUpload, setOpenUpload, setImage}){

    const [dialogTitle, setDialogTitle] = useState('Upload Image or GIF');
    const [greaterThan2, setGreaterThan2] = useState(false);
    const [tempImg, setTempImg] = useState('');
    const handleOnUpload = ()=>{
        if(!greaterThan2 && tempImg!==''){
        {
            setOpenUpload(false);
            setImage(tempImg);
            setTempImg('');
        }
    }
}
    const handleImageChange = (e)=>{
        if(Math.floor(e.target.files[0].size/1024) > 2048)
        {
            setDialogTitle('Please choose image with size less than 2MB!');
            setGreaterThan2(true);
        }
        else
        {
            setDialogTitle('Upload Image or GIF');
            setGreaterThan2(false);
            const img = URL.createObjectURL(e.target.files[0]);
            setTempImg(img);
        }
    }
 return (
    <Dialog
    open = {openUpload}
    aria-labelledby="scroll-dialog-title"
    aria-describedby="scroll-dialog-description"
    className = 'modal-dialog'
    >
        <DialogTitle className = 'modal-title'>
           {dialogTitle}
        </DialogTitle>

        <DialogContent>
            <DialogContentText tabIndex={-1} className = 'note-container'>
                <input type = 'file' accept='image/*' onChange={handleImageChange}/>
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