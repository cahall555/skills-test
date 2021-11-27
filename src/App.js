/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createEmployee } from './graphql/mutations'
import { listEmployees } from './graphql/queries'
import { withAuthenticator } from '@aws-amplify/ui-react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import awsExports from "./aws-exports";
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PersistentDrawerLeft from './components/Drawer/Drawer';
// import DataTable from './components/DataTable/DataTable';

Amplify.configure(awsExports);

const initialState = { id: '', firstname: '', lastname: '' }

const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [Employees, setEmployees] = useState([])

  useEffect(() => {
    fetchEmployees()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }
  // const handleChangeForm = name => event => {
  //   setFormState({ ...formState, [name]: event.target.value });
  // };

  async function fetchEmployees() {
    try {
      const EmployeeData = await API.graphql(graphqlOperation(listEmployees))
      const Employees = EmployeeData.data.listEmployees.items
      setEmployees(Employees)
    } catch (err) { console.log('error fetching Employees') }
  }

  async function addEmployee() {
    try {
      if (!formState.id || !formState.firstname) return
      const Employee = { ...formState }
      setEmployees([...Employees, Employee])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createEmployee, {input: Employee}))
    } catch (err) {
      console.log('error creating Employee:', err)
    }
  }

  function SkillsCheckbox() {
    const [checked, setChecked] = React.useState(true)
    return (
      <FormControlLabel
        control={<Checkbox
        checked={checked}
        onChange={(e)=>setChecked(e.target.checked)}
      />}
      label="Add Skills"
    />
    )
  }

  function Form() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item sm={2}>
            <TextField
            key={Employees.id}
            onChange={event => {console.log(event.target.value); setInput('id', event.target.value)}}
            value={formState.id}
            label="id"
          />
          </Grid>
          <Grid item sm={2}>
          <TextField
            value={formState.firstname}
            onChange={event => setInput('firstname', event.target.value)}
            label="First Name"
            key="first name"
          />
          </Grid>
          <Grid item sm={2}>
            <TextField
              onChange={event => setInput('lastname', event.target.value)}
              value={formState.lastname}
              label="Last Name"
              key="last name"
            />
          </Grid>
          {/* <Grid item sm={2}>
            <TextField
              // onChange={event => setInput('skills', event.target.value)}
              id="standard-basic"
              value={formState.name}
              label="Skills"
            />
          </Grid> */}
        </Grid>
      </div>
    )
  }
  

  return (
    <div>
      <PersistentDrawerLeft />

      <main>
        
        <Form />
        <SkillsCheckbox />
        
          <Button 
            color="primary" 
            variant="contained"
            onClick={addEmployee}>
            Create Employee</Button>
          <Button 
          color="secondary"
            variant="contained">
            Add Skills </Button>
      
      </main>
      {/* <DataTable /> */}
      {
        Employees.map((Employee, index) => (
          <div key={Employee.id ? Employee.id : index} style={styles.Employee}>
            <p style={styles.EmployeeFirstName}>{Employee.firstname}</p>
            <p style={styles.EmployeeLastName}>{Employee.lastname}</p>
            {/* <p style={styles.EmployeeSkills}>{Employee.skills}</p> */}
          </div>
        ))
      }
   </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  Employee: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  EmployeeName: { fontSize: 20, fontWeight: 'bold' },
  EmployeeDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default withAuthenticator(App)