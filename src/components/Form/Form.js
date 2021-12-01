import React, { useEffect, useState} from 'react';
import Box from '@material-ui/core/Box';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useAddEmployee from '../../utils/AddEmployee';
import { gql, useMutation } from '@apollo/client';
import { createEmployee } from '../../graphql/mutations';

const ADD_EMPLOYEE = gql(createEmployee);


const EntryForm = () => {
    // const {formState, setInput, addEmployee} = useAddEmployee();
    const [createEmployee, { data, loading, error }] = useMutation(ADD_EMPLOYEE);

    const initialState = { id: '', firstname: '', lastname: '' }
    const [formState, setFormState] = useState(initialState)

    const setInput = (key, value) => {
        setFormState({ ...formState, [key]: value })
      }

    useEffect(()=>{setFormState(initialState)},[data])
  
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

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
                onClick={()=>{createEmployee({variables:{input:formState}})}}>
                Create Employee</Button>
            }
            />
        </FormGroup>
      </FormControl>
    
    </Box>
  );
}

export default EntryForm;