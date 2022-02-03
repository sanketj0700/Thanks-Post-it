import React, {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Autocomplete, TextField, InputBase } from '@mui/material';
import ImageUploadModal from './ImageUploadModal';
import '../styles/CardModal.css';
import '../styles/EditorModal.css';
import Badge from './Badge'
import PeopleSelector from './PeopleSelector';




function AddPost(props) {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [dedicated, setDedicated]= useState([]);
    const [badges, setBadges] = useState([]);
    const [scroll, setScroll] = useState('paper');
    const badgeList = ['bronze', 'silver', 'gold', 'platinum', 'diamond'];
    const [openUpload, setOpenUpload] = useState(false);
    const [newCard, setNewCard] = useState(false);
    
    const onBadgeClick = ()=>{
        console.log("Badge")
    }
    const handleOnCancel = () => {
        props.setOpen(false);
    }
  

    function handleOnOk () {
        if(false){
            alert("Please fill out all the fields")

        }
        else
        {
            props.setOpen(false);
            console.log("OK")
            const updateCards = 
            {
                id: '',
                title: title,
                user: '',
                text: text,
                badges: badges,
                dedicated: dedicated
            }

            props.setCards([...props.cards, updateCards])

            setTitle('')
            setBadges([])
            setText('')
        }
    }
  return (
  <>
  {openUpload? <ImageUploadModal openUpload={openUpload} setOpenUpload={setOpenUpload} /> : null}
  
  <div className='modal'>
    <Dialog
    open = {props.open}
    scroll = {scroll}
    aria-labelledby="scroll-dialog-title"
    aria-describedby="scroll-dialog-description"
    className = 'modal-dialog'
    >
        <DialogTitle className = 'modal-title'>
            <input placeholder='Thank you ....' value= {title} onChange ={(e)=>{
                setTitle(e.target.value)
            }}></input>
        </DialogTitle>

        <DialogContent dividers={scroll === 'paper'}>
            <div className = 'modal-image-container'>
                <img src="thank-you.gif" alt="logo" className = 'modal-image' onClick={()=> setOpenUpload(true)}/>
            </div>
            
            <div className="modal-dedicated-to-container">
                <PeopleSelector names={['Taniya', 'Dhanvi', 'Riddhi', 'Karan', 'Mihir', 'Sanket']} dedicated = {dedicated} />
            </div>
            
            <DialogContentText tabIndex={-1} className = 'note-container'>
                <InputBase 
                    className = 'note-input'
                    type='textarea' placeholder='Dear xyz thank you ....'
                    fullWidth multiline
                    onChange={(e)=>{
                        setText(e.target.value)
                    }}
                />
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
            <button onClick = {handleOnOk} className='modal-button'>Ok</button>
        </DialogActions>
    </Dialog>
  </div>
  </>
  );
}

export default AddPost;
