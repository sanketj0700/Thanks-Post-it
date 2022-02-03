import React, { Fragment, useState } from 'react';import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@mui/material';
import '../styles/AddButton.css'
import AddPost from './AddPost';
function AddButton(props){
    const [open, setOpen] = useState(false);
    const handleOnClick = () => {
        setOpen(true);
    }
    return (
        <>
        <div className='AddButton'>
            <Button onClick={ handleOnClick}>
                <Fab color="secondary" aria-label="edit">
                    <AddIcon />
                </Fab>
            </Button>      
        </div>
        <AddPost open={open} setOpen={setOpen} cards = {props.cards} setCards = {props.setCards}/>
        </>
);
}

export default AddButton;