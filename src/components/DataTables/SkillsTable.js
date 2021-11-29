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
import { listSkills } from '../../graphql/queries';
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



const SkillsTable =() => {

  const [Skills, setSkills] = useState([])

   useEffect(() => {
    fetchSkills()
  }, [])

  async function fetchSkills() {
    try {
      const SkillData = await API.graphql(graphqlOperation(listSkills))
      const Skills = SkillData.data.listSkills.items
      setSkills(Skills)
    } catch (err) { console.log('error fetching Skills') }
  }
  return (
    <React.Fragment>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="left">Skill</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Skills.map((Skill) => (
            <StyledTableRow
              key={Skill.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row" align="center">
                {Skill.id}
              </StyledTableCell>
              <TableCell align="left">{Skill.name}</TableCell>
  
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </React.Fragment>
  );
}
export default SkillsTable;