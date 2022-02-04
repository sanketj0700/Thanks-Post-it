import React, {useState} from 'react';
import {TextField } from '@mui/material';
function MultiLineTextInput({text, setText}) {
    const [errText, setErrText] = useState('');
    const handleTextChange = (e) => {
        if(e.target.value.length > 0){
        setErrText('');
        setText(e.target.value);
        }
        else{
          setErrText('Please enter some text...');
          setText(e.target.value);
        }
    }
  return (
    <TextField
          id="outlined-multiline-flexible"
          fullWidth
          label="Thank you note"
          style = {{marginTop: '2em'}}
          multiline
          placeholder='Dear xyz thank you ....'
          rows={4}
          value={text}
          onChange={handleTextChange}
          error = {errText.length > 0}
          helperText = {errText}
    />
  );
}

export default MultiLineTextInput;
