/* src/App.js */
import React from 'react'
import EmployeeTable from './components/DataTables/EmployeeTable';
import useFetchEmployees from 'utils/FetchEmployees';



const EmployeePage = () => {
      const [employees, setEmployees, loading, error] = useFetchEmployees();
  
  return (
        <main>
              {loading ? <p>Loading...</p> :<EmployeeTable data={employees} setRows = {setEmployees}/>}
        </main>
  )
}

export default EmployeePage