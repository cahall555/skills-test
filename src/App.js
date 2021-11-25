/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createEmployee } from './graphql/mutations'
import { listEmployees } from './graphql/queries'
import { withAuthenticator } from '@aws-amplify/ui-react'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { name: '', description: '' }

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

  return (
    <div style={styles.container}>
      <h2>Amplify Employees</h2>
      <input
        onChange={event => setInput('id', event.target.value)}
        style={styles.input}
        value={formState.id}
        placeholder="id"
      />
      <input
        onChange={event => setInput('firstname', event.target.value)}
        style={styles.input}
        value={formState.firstname}
        placeholder="First Name"
      />
      <input
        onChange={event => setInput('lastname', event.target.value)}
        style={styles.input}
        value={formState.lastname}
        placeholder="Last Name"
      />
      <input
        onChange={event => setInput('skills', event.target.value)}
        style={styles.input}
        value={formState.skills}
        placeholder="Skills"
      />
      <button style={styles.button} onClick={addEmployee}>Create Employee</button>
      {
        Employees.map((Employee, index) => (
          <div key={Employee.id ? Employee.id : index} style={styles.Employee}>
            <p style={styles.EmployeeFirstName}>{Employee.firstname}</p>
            <p style={styles.EmployeeLastName}>{Employee.lastname}</p>
            <p style={styles.EmployeeSkills}>{Employee.skills}</p>
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