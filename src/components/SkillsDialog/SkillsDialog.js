import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { gql, useMutation } from '@apollo/client';
import {createEmployeeSkills} from '../../graphql/mutations';
import SelectSkills from 'components/Dropdown/SkillsDropdown';


const CREATE_EMPLOYEE_SKILL = gql(createEmployeeSkills);

const SkillsDialog = ({data, skills}) => {
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState([]);
    const [currentSkill, setCurrentSkill] = useState('');
    const [addSkillEmployee, { update, loading, error }] = useMutation(CREATE_EMPLOYEE_SKILL);

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
      setValues([]);
    };
    const handleSubmit = () => {
      addSkillEmployee({variables:{input: {employeeSkillsEmployeeId: data, employeeSkillsSkillId: currentSkill}}});
      setOpen(false);
      setValues([]);
    };
  
    return (
      <div>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Add Skills
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Skills</DialogTitle>
          <DialogContent>
            <DialogContentText>Add Employee Skills.</DialogContentText>
            
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormGroup>
                <SelectSkills skills={skills} value={currentSkill} onValueChange={setCurrentSkill}/>
              </FormGroup>
              </FormControl>
            </DialogContent>
            
          <DialogActions>
            <Button onClick={handleClose} variant="contained" color="secondary">
              Close
            </Button>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
export default SkillsDialog;