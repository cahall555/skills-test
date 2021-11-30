import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Box, Grid } from "@material-ui/core";
import SelectSkills from 'components/Dropdown/SkillsDropdown';

const SkillsDialog = () => {
    const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState([]);
    const [text, setText] = React.useState("");
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
      setValues([]);
    };
    const handleChangeText = (e) => {
      setText(e.target.value);
    };
    const addValue = () => {
      setValues([...values, ""]);
    };
    const handleValueChange = (index, e) => {
      const updatedValues = values.map((value, i) => {
        if (i === index) {
          return e.target.value;
        } else {
          return value;
        }
      });
      setValues(updatedValues);
    };
    const deleteValue = (jump) => {
      setValues(values.filter((j) => j !== jump));
    };
  
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Skills
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Skills</DialogTitle>
          <DialogContent>
            <DialogContentText>Add Employee Skills.</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              value={text}
              onChange={handleChangeText}
              label="Employee ID"
              fullWidth
            />
            {values.map((jump, index) => (
              <Box key={"jump" + index}>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item xs={10}>
                    <TextField
                      autoFocus
                      margin="dense"
                      label="Skill Id"
                      value={jump || ""}
                      onChange={(e) => handleValueChange(index, e)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <SelectSkills />
                  </Grid>
                  <Grid item xs={2}>
                    <div
                      className="font-icon-wrapper"
                      onClick={() => deleteValue(jump)}
                    >
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </DialogContent>
          <Button onClick={addValue} color="primary">
            Add
          </Button>
          <DialogActions>
            <Button onClick={handleClose} variant="contained" color="secondary">
              Cancel
            </Button>
            <Button onClick={handleClose} variant="contained" color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
export default SkillsDialog;