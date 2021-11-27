/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createEmployee } from './graphql/mutations'
import { listEmployees } from './graphql/queries'
import { withAuthenticator } from '@aws-amplify/ui-react'
import Button from '@material-ui/core/Button';
import awsExports from "./aws-exports";
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PersistentDrawerLeft from './components/Drawer/Drawer';
import EmployeeTable from './components/DataTable/EmployeeTable';

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
            name="Employees.id"
            onChange={event => {console.log(event.target.value); setInput('id', event.target.value)}}
            value={formState.id}
            label="id"
            key="employeeid"
          />
          </Grid>
          <Grid item sm={2}>
          <TextField
            value={formState.firstname}
            onChange={event => setInput('firstname', event.target.value)}
            label="First Name"
            key="firstname"
          />
          </Grid>
          <Grid item sm={2}>
            <TextField
              onChange={event => setInput('lastname', event.target.value)}
              value={formState.lastname}
              label="Last Name"
              key="lastname"
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
            <EmployeeTable />
      </main>
    
   </div>
  )
}

export default withAuthenticator(App)