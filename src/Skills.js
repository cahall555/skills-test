/* src/App.js */
import React from 'react'
import SkillsTable from './components/DataTables/SkillsTable';
import useFetchSkills from 'utils/FetchSkills';

const SkillsPage = () => {
      const [skills, setSkills] = useFetchSkills();
  
  return (

        <main>
              <SkillsTable data={skills}/>
        </main>
  )
}

export default SkillsPage