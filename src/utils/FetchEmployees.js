import {useState, useEffect} from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listEmployees } from '../graphql/queries';
import awsExports from '../aws-exports';
Amplify.configure(awsExports);

const useFetchEmployees = () => {

const [Employees, setEmployees] = useState([])

    async function fetchEmployees() {
        try {
        const EmployeeData = await API.graphql(graphqlOperation(listEmployees))
        const Employees = EmployeeData.data.listEmployees.items
        setEmployees(Employees)
        } catch (err) { console.log('error fetching Employees') }
    }

    useEffect(() => {
        fetchEmployees()
    }, [])
    return {Employees}
}

export default useFetchEmployees;