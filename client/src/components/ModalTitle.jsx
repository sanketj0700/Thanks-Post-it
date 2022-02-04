import React, {useState} from 'react';
import {TextField } from '@mui/material';
function ModalTitle({title, setTitle}) {
    const [errText, setErrText] = useState('');
    const handleTitleChange = (e) => {
        if(e.target.value.length > 0){
        setErrText('');
        setTitle(e.target.value);
        }
        else{
          setErrText('Please enter some title...');
          setTitle(e.target.value);
        }
    }
  return (
    <TextField
          id="outlined-multiline-flexible"
          variant="standard"
          fullWidth
          inputProps={{
            style : {fontSize: '2em', fontWeight: '800', outline: 'none'},
          }}
          InputProps={
              {
                  disableUnderline: true,
              }
          }
          placeholder='Thank you ...'
          value={title}
          onChange={handleTitleChange}
          error = {errText.length > 0}
          helperText = {errText}
    />
  );
}

export default ModalTitle;
