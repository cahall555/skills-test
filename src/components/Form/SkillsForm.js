import React, { useEffect, useState} from 'react';
import Box from '@material-ui/core/Box';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { gql, useMutation } from '@apollo/client';
import { createSkill} from '../../graphql/mutations';

const ADD_Skill = gql(createSkill);



const SkillsForm = () => {
    const [createSkill, { data, loading, error }] = useMutation(ADD_Skill);

    const initialState = { id: '', name: ''}
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
        <FormLabel component="legend">Add Skills</FormLabel>
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
                onChange={event => setInput('name', event.target.value)}
                label="Skill"
              />
            }
          />
        
          <FormControlLabel 
            control={
                <Button
                color="primary" 
                variant="contained"
                onClick={()=>{createSkill({variables:{input:formState}})}}>
                Create Skill</Button>
            }
            />
        </FormGroup>
      </FormControl>
    
    </Box>
  );
}

export default SkillsForm;