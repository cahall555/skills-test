import React from 'react';
import Box from '@material-ui/core/Box';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useAddEmployee from '../../utils/AddEmployee';

const EntryForm = () => {
    const {formState, setInput, addEmployee} = useAddEmployee();

  return (
    <Box sx={{ display: 'flex', width: "100%", justifyContent: "center" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Add Employees</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
                <TextField
                value={formState.id}
                onChange={event => setInput('id', event.target.value)}
                label="id"
              />
            }
          />
          <FormControlLabel
            control={
                <TextField
                value={formState.firstname}
                onChange={event => setInput('firstname', event.target.value)}
                label="First Name"
              />
            }
          />
          <FormControlLabel
            control={
                <TextField
                onChange={event => setInput('lastname', event.target.value)}
                value={formState.lastname}
                label="Last Name"
              />
            }
          />
          <FormControlLabel 
            control={
                <Button
                color="primary" 
                variant="contained"
                onClick={addEmployee}>
                Create Employee</Button>
            }
            />
        </FormGroup>
      </FormControl>
    
    </Box>
  );
}

export default EntryForm;