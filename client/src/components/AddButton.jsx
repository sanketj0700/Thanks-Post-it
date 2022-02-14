import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@mui/material';
import '../styles/AddButton.css'
import AddPost from './AddPost';
import { green, red } from '@mui/material/colors';
import { color } from '@mui/system';
function AddButton(props){
    const [open, setOpen] = useState(false);
    const loggedInUser = props.loggedInUser;
    const handleOnClick = () => {
        setOpen(true);
    }
    return (
        <>
        <div className='AddButton'>
            <Button onClick={ handleOnClick}>
                <Fab style={{backgroundColor:'#18a399', color:'white'}} aria-label="add">
                    <AddIcon />
                </Fab>
            </Button>      
        </div>
        <AddPost open={open} setOpen={setOpen} cards = {props.cards} 
        setCards = {props.setCards} 
        peopleOptions = {props.peopleOptions} 
        loggedInUser = {loggedInUser}/>
        </>
);
}

export default AddButton;