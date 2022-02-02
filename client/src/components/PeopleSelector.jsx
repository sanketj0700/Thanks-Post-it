import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function PeopleSelector({names, dedicated}) {

  return (
    <>
    <Autocomplete
        multiple
        id="tags-outlined"
        options={names}
        getOptionLabel={option=>option}
        defaultValue={[...dedicated]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Dedicated to"
            placeholder="To"
          />
        )}
      />
    </>
  );
}

export default PeopleSelector;
