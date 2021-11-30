/* src/App.js */
import React from 'react'
import Amplify from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'
import awsExports from "./aws-exports";
import EmployeeTable from './components/DataTables/EmployeeTable';
import SkillsTable from './components/DataTables/SkillsTable';
import SkillsDialog from './components/SkillsDialog/SkillsDialog';
import EntryForm from './components/Form/Form';

Amplify.configure(awsExports);

const App = () => {

  return (
    <React.Fragment> 
      <SkillsDialog />
      <EntryForm />
      <EmployeeTable />
      <SkillsTable />
  </React.Fragment>
  )
}

export default withAuthenticator(App)