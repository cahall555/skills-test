// import React, {useState, useEffect} from 'react';
import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
// import Amplify, { API, graphqlOperation } from 'aws-amplify';
// import { listEmployees } from './graphql/queries';
// import awsExports from "./aws-exports";
// Amplify.configure(awsExports);


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'skills',
    headerName: 'Skills',
    width: 110,
    editable: true,
  },
];
const rows = [
  { id: 1, firstName: 'Snow', lastName: 'Jon', skills: 35 },
  { id: 2, firstName: 'Lannister', lastName: 'Cersei', skills: 42 },
  { id: 3, firstName: 'Lannister', lastName: 'Jaime', skills: 45 },
  { id: 4, firstName: 'Stark', lastName: 'Arya', skills: 16 },
  { id: 5, firstName: 'Targaryen', lastName: 'Daenerys', skills: null },
  { id: 6, firstName: 'Melisandre', lastName: null, skills: 150 },
  { id: 7, firstName: 'Clifford', lastName: 'Ferrara', skills: 44 },
  { id: 8, firstName: 'Frances', lastName: 'Rossini', skills: 36 },
  { id: 9, firstName: 'Roxie', lastName: 'Harvey', skills: 65 },
];

const DataTable = () => {

  // const [tableData, setEmployees] = useState([])
  // useEffect(() => {
  //   fetchEmployees()
  // }, [])

  // async function fetchEmployees() {
  //   try {
  //     const EmployeeData = await API.graphql(graphqlOperation(listEmployees))
  //     const Employees = EmployeeData.data.listEmployees.items
  //     setEmployees(Employees)
  //   } catch (err) { console.log('error fetching Employees') }
  // }

  return(
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default DataTable;
