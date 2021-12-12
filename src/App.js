/* src/App.js */
import React from "react";
import Amplify from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsExports from "./aws-exports";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import EmployeeTable from "./components/DataTables/EmployeeTable";
import SkillsTable from "./components/DataTables/SkillsTable";
import EntryForm from "./components/Form/Form";
import SkillsForm from "./components/Form/SkillsForm";
import useFetchSkills from "utils/FetchSkills";
import useFetchEmployees from "utils/FetchEmployees";
Amplify.configure(awsExports);

const App = () => {
  const [skills, setSkills] = useFetchSkills();
  const [employees, setEmployees, loading, error] = useFetchEmployees();

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container rowspacing={1} columnspacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <EntryForm />
          </Grid>
          <Grid item xs={6}>
            <SkillsForm />
          </Grid>
        </Grid>
      </Box>
      <Box pt={8}>
        <Divider />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <EmployeeTable data={employees} setRows={setEmployees} />
        )}
        <SkillsTable data={skills} />
      </Box>
    </>
  );
};

export default withAuthenticator(App);
