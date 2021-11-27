import React, {useState, useEffect} from 'react';
import { styled } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listEmployees } from '../../graphql/queries';
import awsExports from "../../aws-exports";
Amplify.configure(awsExports);


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: 14,}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const EmployeeTable =() => {

  const [Employees, setEmployees] = useState([])

   useEffect(() => {
    fetchEmployees()
  }, [])

  async function fetchEmployees() {
    try {
      const EmployeeData = await API.graphql(graphqlOperation(listEmployees))
      const Employees = EmployeeData.data.listEmployees.items
      setEmployees(Employees)
    } catch (err) { console.log('error fetching Employees') }
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="left">First Name</StyledTableCell>
            <StyledTableCell align="left">Last Name</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Employees.map((Employee) => (
            <StyledTableRow
              key={Employee.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row" align="center">
                {Employee.id}
              </StyledTableCell>
              <TableCell align="left">{Employee.firstname}</TableCell>
              <TableCell align="left">{Employee.lastname}</TableCell>
  
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default EmployeeTable;