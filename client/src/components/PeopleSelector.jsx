import React, {useState} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function PeopleSelector({names, dedicated, setDedicated}) {

  const [errMsg, setErrMsg] = useState('');
  return (
    <>
    <Autocomplete
        multiple
        id="tags-outlined"
        options={names}
        value = {dedicated}
        onChange={(e, newValue) => {
          if(newValue.length > 0)
          {
            setErrMsg('');
            setDedicated(newValue);
          }
          else 
          {
            setDedicated(newValue);
            setErrMsg('Please select a person to dedicate this message to...');
          }
        }}
        getOptionLabel={option=>option.given_name}
        isOptionEqualToValue={(option,value) => option.given_name === value.given_name}
        defaultValue={[...dedicated]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Dedicated to"
            placeholder="To"
            error = {errMsg !== ''}
            helperText = {errMsg}
          />
        )}
      />
    </>
  );
}

export default PeopleSelector;
