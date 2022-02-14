import {Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle} from '@mui/material';
import {useState} from 'react';
import '../styles/CardModal.css';
import axios from  'axios';

function ImageUploadModal({openUpload, setOpenUpload, setImage}){

    const [dialogTitle, setDialogTitle] = useState('Upload Image or GIF');
    const [greaterThan2, setGreaterThan2] = useState(false);
    const [tempImg, setTempImg] = useState('');
    const url = process.env.REACT_APP_ENV === 'production'? 'https://thanks-post-it-backend.herokuapp.com' : 'http://localhost:8080';
    const handleOnUpload = ()=>{
        const formData = new FormData();
        if(!greaterThan2 && tempImg!==''){
        {
            formData.append(
                "img", 
                tempImg,
                tempImg.name
            );
            const config = {
                mode: 'no-cors',
                headers: {
                  'Authorization' : `Bearer ${localStorage.getItem('token')}`,
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json',
                }
            }
            axios.post(`${url}/message/uploadImg`, formData, config).then(res=>{
                if(res.data.uploadStatus !== "successful")
                {
                    setDialogTitle('Image change unsuccessful');
                }
                else
                {
                    setImage(res.data.result.url);
                    setOpenUpload(false);
                }
            });
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
            const img = e.target.files[0];
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