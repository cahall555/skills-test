import React, { useState, useEffect } from 'react';
import { styled } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/EditOutlined";
import { gql, useMutation, useQuery } from '@apollo/client';
import { deleteSkill, updateSkill,deleteEmployeeSkills} from '../../graphql/mutations';
import { getEmployee } from 'graphql/queries';

const DELETE_SKILL = gql(deleteSkill);
const UPDATE_SKILL = gql (updateSkill);
const DELETE_EMPLOYEE_SKILLS =gql(deleteEmployeeSkills);
const GET_EMPLOYEE = gql(getEmployee);

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



const SkillsTable =({data}) => {
  const [deleteSkill] = useMutation(DELETE_SKILL);
  // const [deleteEmployeeSkill] = useMutation(DELETE_EMPLOYEE_SKILLS);
  // const { loading, error, employeeData } =  useQuery(GET_EMPLOYEE, { variables: { id } });
  // if (loading) return 'Loading...';
  // if (error) return `Error! ${error.message}`;

  // const handleDelete = () => {
  //   deleteEmployeeSkill({variables:{input: {id: employeeData}}})
  //   deleteSkill({variables:{input: {id: Skill.id}}})
  // };


  return (
    <React.Fragment>
    <TableContainer component={Paper}>
    <Typography variant="h3" component="div" gutterBottom>
        Skills
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
             <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="left">Skill</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((Skill) => (
            <StyledTableRow
              key={Skill.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
               <IconButton
                    aria-label="delete"
                    onClick={()=>{deleteSkill({variables:{input: {id: Skill.id}}})}}
                  >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
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