import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { gql, useQuery,  } from '@apollo/client';
import { getEmployee } from '../../graphql/queries';
import SkillsTable from 'components/DataTables/SkillsTable';

const GET_EMPLOYEE_QUERY = gql(getEmployee);



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog =({id, handleClose}) => {
    
  const open =id != undefined;
  const { loading, error, data } =  useQuery(GET_EMPLOYEE_QUERY, { variables: { id } });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
 
  console.log(data)
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Review Employee
      </Button> */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Employee Skill
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
        <ListItem >
          <ListItemText
                  primary="Employee ID"
                  secondary={data.getEmployee.id}
                />
        </ListItem>
          <ListItem >
            <ListItemText
                    primary="First Name"
                    secondary={data.getEmployee.firstname}
                  />
          </ListItem>
          <ListItem >
            <ListItemText
                    primary="Last Name"
                    secondary={data.getEmployee.lastname}
                  />
          </ListItem>
        </List>
        <SkillsTable data={data.getEmployee.skills.items} />
          
      </Dialog>
    </div>
  );
}

export default FullScreenDialog