import React, {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MultiLineTextInput from './MultiLineTextInput';
import ModalTitle from './ModalTitle';
import ImageUploadModal from './ImageUploadModal';
import '../styles/CardModal.css';
import '../styles/EditorModal.css';
import PeopleSelector from './PeopleSelector';
import BadgeSelector from './BadgeSelector';
import axios from 'axios';

function AddPost(props) {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [dedicated, setDedicated]= useState([]);
    const [badges, setBadges] = useState([]);
    const [image, setImage] = useState('');
    const scroll = 'paper';
    const badgeList = ['bronze', 'silver', 'gold', 'platinum', 'diamond'];
    const [openUpload, setOpenUpload] = useState(false);
    const loggedInUser = props.loggedInUser;
    const peopleOptions = props.peopleOptions;
    const url = process.env.REACT_APP_ENV === 'production'? 'https://thanks-post-it-backend.herokuapp.com' : 'http://localhost:8080';

    const handleOnCancel = () => {
        props.setOpen(false);
    }
  
    const handleOnAdd = () =>{

        if(title.length > 0 && title.split(' ').length <= 15 && text.length > 0 && dedicated.length > 0){
            props.setOpen(false);
            const newCard =
            {
                title: title,
                author: loggedInUser,
                text: text,
                badges: badges,
                dedicated: dedicated,
                image: image
            }

            props.setCards([newCard, ...props.cards]);
            // send card to server
            const config = {
                mode: 'no-cors',
                headers: {
                  'Authorization' : `Bearer ${localStorage.getItem('token')}`,
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json',
                }
            }
            axios.post(`${url}/message/create`, {...newCard}, config);
            
            // // increment badge counter for each user in dedicated 
            // axios.post(`${url}/user/updateBadgeCount`, {dedicated: dedicated, badges: badges}, config).then(res=>{
            //     console.log(res.data);
            // });


            setTitle('');
            setBadges([]);
            setText('');
            setDedicated([]);
        }
    }
  return (
  <>
  {openUpload? <ImageUploadModal openUpload={openUpload} setOpenUpload={setOpenUpload} setImage={setImage}/> : null}
  
  <div className='modal'>
    <Dialog
    open = {props.open}
    scroll = {scroll}
    aria-labelledby="scroll-dialog-title"
    aria-describedby="scroll-dialog-description"
    className = 'modal-dialog'
    >
        <DialogTitle className = 'modal-title'>
            <ModalTitle title = {title} setTitle={setTitle} />
        </DialogTitle>

        <DialogContent dividers={scroll === 'paper'}>
            <div className = 'modal-image-container'>
                <img src={image} alt="thank-you" className = 'modal-image' onClick={()=> setOpenUpload(true)}/>
            </div>
            
            <div className="modal-dedicated-to-container">
                <PeopleSelector names={peopleOptions.filter(name => name.given_name!==loggedInUser.given_name)} dedicated = {dedicated} setDedicated = {setDedicated}/>
            </div>
            
            <DialogContentText tabIndex={-1} className = 'note-container'>
                <MultiLineTextInput text = {text} setText = {setText}/>
            </DialogContentText>
            <div className='modal-badges-display'>
                <h4 className='badges-title'>Badges</h4>
                <BadgeSelector badgeList={badgeList} badges={badges} setBadges={setBadges}/>
            </div>
        </DialogContent>
        <DialogActions>
            <button onClick={handleOnCancel} className='modal-button'>Cancel</button>
            <button onClick = {handleOnAdd} className='modal-button'>Add</button>
        </DialogActions>
    </Dialog>
  </div>
  </>
  );
}

export default AddPost;
