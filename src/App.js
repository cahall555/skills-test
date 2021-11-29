/* src/App.js */
import React, { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import EmployeePage from './Employee';
// import SkillsPage from './Skills';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createEmployee, createSkill } from './graphql/mutations'
import { listEmployees, listSkills } from './graphql/queries'
import { withAuthenticator } from '@aws-amplify/ui-react'
import Button from '@material-ui/core/Button';
import awsExports from "./aws-exports";
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';
import EmployeeTable from './components/DataTables/EmployeeTable';
import SkillsTable from './components/DataTables/SkillsTable';
// import SimpleDialogDemo from './components/SkillsDialog/SkillsDialog';

Amplify.configure(awsExports);

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(6),
  textAlign: 'center',
  color: theme.palette.primary.man,
}));


const initialState = { id: '', firstname: '', lastname: '' }
const skillsInitialState = {id: '', name: ''}

const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [Employees, setEmployees] = useState([])

  const [skillsFormState, setSkillsFormState] = useState(skillsInitialState)
  const [Skills, setSkills] = useState([])

  useEffect(() => {
    fetchEmployees()
  }, [])

  useEffect(() => {
    fetchSkills()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  function setSkillsInput(key, value) {
    setSkillsFormState({ ...skillsFormState, [key]: value })
  }

  async function fetchEmployees() {
    try {
      const EmployeeData = await API.graphql(graphqlOperation(listEmployees))
      const Employees = EmployeeData.data.listEmployees.items
      setEmployees(Employees)
    } catch (err) { console.log('error fetching Employees') }
  }

  async function fetchSkills() {
    try {
      const SkillData = await API.graphql(graphqlOperation(listSkills))
      const Skills = SkillData.data.listSkills.items
      setSkills(Skills)
    } catch (err) { console.log('error fetching Skills') }
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

  async function addSkill() {
    try {
      if (!skillsFormState.id || !skillsFormState.name) return
      const Skill = { ...skillsFormState }
      setSkills([...Skills, Skill])
      setSkillsFormState(skillsInitialState)
      await API.graphql(graphqlOperation(createSkill, {input: Skill}))
    } catch (err) {
      console.log('error creating Skill:', err)
    }
  }

  function SkillsCheckbox() {
    const [checked, setChecked] = React.useState(true)
    return (
      <React.Fragment>
      <FormControlLabel
        control={<Checkbox
        checked={checked}
        onChange={(e)=>setChecked(e.target.checked)}
      />}
      label="Add Skills"
    />
    </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <div>
        {/* <SimpleDialogDemo /> */}
        <main>
         
          
        <div>
          <Grid container spacing={24}>
            <Grid item sm={2}>
              <TextField
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
            />
            </Grid>
            <Grid item sm={2}>
              <TextField
                onChange={event => setInput('lastname', event.target.value)}
                value={formState.lastname}
                label="Last Name"
              />
            </Grid>
            <Grid item sm={2}>
              <TextField
                onChange={event => setSkillsInput('id', event.target.value)}
                value={formState.name}
                label="Id"
              />
            <Grid item sm={2}>
              <TextField
                onChange={event => setSkillsInput('name', event.target.value)}
                value={formState.name}
                label="Skills"
              />
            </Grid>
          </Grid>
        </Grid>
        </div>
          <SkillsCheckbox />
          
            <Button 
              color="primary" 
              variant="contained"
              onClick={addEmployee}>
              Create Employee</Button>
            <Button 
              color="secondary"
              variant="contained"
              onClick={addSkill}>
              Add Skills </Button>
              <Grid >
                <Grid item lg={16}>
                  <Item> Employees </Item>
                </Grid>
              </Grid>
              <EmployeeTable />
              <Grid >
                <Grid item lg={16}>
                  <Item> Skills </Item>
                </Grid>
              </Grid>
              <SkillsTable />
        </main>

    </div>
  </React.Fragment>
  )
}

export default withAuthenticator(App)