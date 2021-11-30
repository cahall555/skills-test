import {useState, useEffect} from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createEmployee} from '../graphql/mutations'
import awsExports from '../aws-exports';
Amplify.configure(awsExports);



const useAddEmployee = () => {
    const [Employees, setEmployees] = useState([])
    const initialState = { id: '', firstname: '', lastname: '' }
    const [formState, setFormState] = useState(initialState)

    const setInput = (key, value) => {
        setFormState({ ...formState, [key]: value })
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

      useEffect(() => {
        addEmployee()
    },)

    return {Employees, initialState, formState, setInput, addEmployee}
  }

export default useAddEmployee;