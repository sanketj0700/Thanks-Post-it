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
import Badge from './Badge'
import PeopleSelector from './PeopleSelector';
import axios from 'axios';

function AddPost(props) {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [dedicated, setDedicated]= useState([]);
    const [badges, setBadges] = useState([]);
    const [image, setImage] = useState('thank-you.gif');
    const scroll = 'paper';
    const badgeList = ['bronze', 'silver', 'gold', 'platinum', 'diamond'];
    const [openUpload, setOpenUpload] = useState(false);
    const loggedInUser = props.loggedInUser;

    const peopleOptions = [
        {
        name: 'Riddhi Batas',
        given_name: 'Riddhi',
        family_name: 'Batas',
        email: 'riddhi.batas@searce.com',
        picture: 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg',
        google_id: '108879585989738247589',
        },
        {
        name: 'Sanket Jain',
        given_name: 'Sanket',
        family_name: 'Jain',
        email: 'sanket.jain@searce.com',
        picture: 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg',
        google_id: '108879585989738247589',
        },
        {
        name: 'Mihir Doshi',
        given_name: 'Mihir',
        family_name: 'Doshi',
        email: 'mihir.doshi@searce.com',
        picture: 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg',
        google_id: '108879585989738247589',
        },
        {
        name: 'Dhanvi Patel',
        given_name: 'Dhanvi',
        family_name: 'Patel',
        email: 'dhanvi.shah@searce.com',
        picture: 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg',
        google_id: '108879585989738247589',
        },
        {
        name: 'Taniya Hinduja',
        given_name: 'Taniya',
        family_name: 'Hinduja',
        email: 'taniya.hinduja@searce.com',
        picture: 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg',
        google_id: '108879585989738247589',
        },
        {
            name:'Karan Bhatia',
            given_name:'Karan',
            family_name:'Bhatia',
            email:'karan.bhatia@searce.com',
            picture:'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg',
            google_id:'108879585989738247589',
        }
];

    const handleOnCancel = () => {
        props.setOpen(false);
    }
  
    const handleOnAdd = () =>{

        if(title.length > 0 && text.length > 0 && dedicated.length > 0){
            props.setOpen(false);
            const newCard =
            {
                id: props.cards.length + 1,
                title: title,
                user: loggedInUser,
                text: text,
                badges: badges,
                dedicated: dedicated,
                image: image,
                created_at: new Date().toLocaleString(),
            }

            props.setCards([newCard, ...props.cards]);
            // send to server 
            //axios.post('https://thanks-post-it/message/create', {...newCard, id: loggedInUser.email});

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
                <img src={image} alt="logo" className = 'modal-image' onClick={()=> setOpenUpload(true)}/>
            </div>
            
            <div className="modal-dedicated-to-container">
                <PeopleSelector names={peopleOptions.filter(name => name.given_name!=loggedInUser.given_name)} dedicated = {dedicated} setDedicated = {setDedicated}/>
            </div>
            
            <DialogContentText tabIndex={-1} className = 'note-container'>
                <MultiLineTextInput text = {text} setText = {setText}/>
            </DialogContentText>
            <div className='modal-badges-display'>
                <h4 className='badges-title'>Badges</h4>
                <ul className='badges'>
                    {badgeList.map((badge, index)=>{
                        return <Badge key = {index} badge = {badge} badges={badges} setBadges={setBadges}
                        />
                    })}
                </ul>
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
