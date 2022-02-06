import React, {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ModalTitle from './ModalTitle';
import ImageUploadModal from './ImageUploadModal';
import '../styles/CardModal.css';
import '../styles/EditorModal.css';
import Badge from './Badge';
import PeopleSelector from './PeopleSelector';
import MultiLineTextInput from './MultiLineTextInput';
import axios from 'axios';

function EditorModal({open, setOpen, title, text, badges, dedicated, image, _id, setTitle, setText, setBadges, setDedicated, setImage, loggedInUser, peopleOptions}) {
    const scroll = 'paper';
    const [openUpload, setOpenUpload] = useState(false);
    const badgeList = ['bronze', 'silver', 'gold', 'platinum', 'diamond'];

    const url = 'https://thanks-post-it-backend.herokuapp.com';
    //temporary state for the modal before saving
    const [tempTitle, setTempTitle] = useState(title);
    const [tempText, setTempText] = useState(text);
    const [tempBadges, setTempBadges] = useState(badges);
    const [tempDedicated, setTempDedicated] = useState(dedicated);


    const handleOnSave= () => {
        if(tempTitle.length > 0 && tempText.length > 0 && tempDedicated.length > 0){
            setTitle(tempTitle);
            setText(tempText);
            setBadges(tempBadges);
            setDedicated(tempDedicated);
            setOpen(false);
            console.log(image);

            // update request to server
            const config = {
                mode: 'no-cors',
                headers: {
                  'Authorization' : `Bearer ${localStorage.getItem('token')}`,
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json',
                }
            }
            const body = {
                title: tempTitle,
                text: tempText,
                badges: tempBadges,
                dedicated: tempDedicated,
                image: image,
                _id: _id
            }
            axios.patch(`${url}/message/update`, 
                body, config
            ).then(res=>{
                console.log(res.data);
            });
        }
    }
    const handleOnCancel = () => {
        setOpen(false);
        setTempTitle(title);
        setTempText(text);
        setTempBadges(badges);
        setTempDedicated(dedicated);
    }
  return (
      <>
      {openUpload? <ImageUploadModal openUpload={openUpload} setOpenUpload={setOpenUpload} image = {image} setImage={setImage}/> : null}
  <div className='modal'>
    <Dialog
    open = {open}
    scroll = {scroll}
    aria-labelledby="scroll-dialog-title"
    aria-describedby="scroll-dialog-description"
    className = 'modal-dialog'
    >
        <DialogTitle className = 'modal-title'>
            <ModalTitle title = {tempTitle} setTitle={setTempTitle} />
        </DialogTitle>

        <DialogContent dividers={scroll === 'paper'}>
            <div className = 'modal-image-container'>
                <img src={image} alt="thank-you" className = 'modal-image' onClick={()=> setOpenUpload(true)}/>
            </div>
            
            <div className="modal-dedicated-to-container">
                <PeopleSelector names={peopleOptions.filter(name => name.given_name!== loggedInUser.given_name)} dedicated = {tempDedicated} setDedicated={setTempDedicated}/>
            </div>
            
            <DialogContentText tabIndex={-1} className = 'note-container'>
                <MultiLineTextInput text = {tempText} setText = {setTempText} />
            </DialogContentText>
            <div className='modal-badges-display'>
                <h4 className='badges-title'>Badges</h4>
                <ul className='badges'>
                    {badgeList.map((badge, index)=>{
                        return <Badge key = {index} badge = {badge} badges = {tempBadges} setBadges={setTempBadges}/>
                    })}
                </ul>
            </div>
        </DialogContent>
        <DialogActions>
            <button className='modal-button' onClick={handleOnCancel}>Cancel</button>
            <button onClick = {handleOnSave} className='modal-button'>Save</button>
        </DialogActions>
    </Dialog>
  </div>
  </>
  );
}

export default EditorModal;
