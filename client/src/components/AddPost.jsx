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


let cnt = 0;
let textField = '';
let titleField = '';

function AddPost(props) {
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
  
    const onChange = (event) => {
        textField = event.target.value
      };

      const onTitleChange = (event) => {
        titleField = event.target.value
      };

    function handleOnOk () {
        if(textField.length==0 || titleField.length==0){
            alert("Please fill out all the fields")

        }
        else
        {
            props.setOpen(false);
            console.log("OK")
            const updateCards = [
            ...props.cards,
            {
                id: '',
                title: titleField,
                user: '',
                text: textField,
                badges: badges,
                dedicated: dedicated
            }
            ]
            props.setCards(updateCards)
        }
    }
  return (
  <>
  {openUpload? <ImageUploadModal openUpload={openUpload} setOpenUpload={setOpenUpload} /> : null}
  {textField =''}
  {titleField = ''}
  <div className='modal'>
    <Dialog
    open = {props.open}
    scroll = {scroll}
    aria-labelledby="scroll-dialog-title"
    aria-describedby="scroll-dialog-description"
    className = 'modal-dialog'
    >
        <DialogTitle className = 'modal-title'>
            <input placeholder='Thank you ....' onChange = {onTitleChange}></input>
        </DialogTitle>

        <DialogContent dividers={scroll === 'paper'}>
            <div className = 'modal-image-container'>
                <img src="thank-you.gif" alt="logo" className = 'modal-image' onClick={()=> setOpenUpload(true)}/>
            </div>
            
            <div className="modal-dedicated-to-container">
                {/* <Autocomplete
                    className = 'dedicated-to-input'
                    renderInput={(params) =>
                        <TextField {...params}
                            label="Dedicated to"
                        variant="outlined"
                            style={{ maxWidth: '70%' }}
                        />}
                /> */}
                <PeopleSelector names={['Taniya', 'Dhanvi', 'Riddhi', 'Karan', 'Mihir', 'Sanket']} dedicated = {dedicated} />
            </div>
            
            <DialogContentText tabIndex={-1} className = 'note-container'>
                <InputBase 
                    className = 'note-input'
                    type='textarea' placeholder='Dear xyz thank you ....'
                    fullWidth multiline
                    onChange={onChange}
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
            {/* <button onClick={handleOnCancel}>Cancel</button> */}
            <button onClick = {handleOnOk} className='modal-button'>Ok</button>
        </DialogActions>
    </Dialog>
  </div>
  </>
  );
}

export default AddPost;
