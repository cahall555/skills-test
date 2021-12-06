/* src/App.js */
import React, { useState } from 'react'
import Amplify from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'
import awsExports from "./aws-exports";
// import EmployeeTable from './components/DataTables/EmployeeTable';
import EmployeeTable from './components/DataTables/EmployeeTable';
import SkillsTable from './components/DataTables/SkillsTable';
import SkillsDialog from './components/SkillsDialog/SkillsDialog';
import EntryForm from './components/Form/Form';
import SkillsForm from './components/Form/SkillsForm';
import useFetchSkills from 'utils/FetchSkills';
import useFetchEmployees from 'utils/FetchEmployees';
Amplify.configure(awsExports);



const App = () => {
  const [skills, setSkills] = useFetchSkills();
  const [employees, setEmployees, loading, error] = useFetchEmployees();
 

  return (
    <React.Fragment> 
      <SkillsDialog />
      <EntryForm />
      <SkillsForm />
      {loading ? <p>Loading...</p> :<EmployeeTable data={employees} setRows = {setEmployees}/>}
      <SkillsTable data={skills}/>
  </React.Fragment>
  )
}

export default withAuthenticator(App)