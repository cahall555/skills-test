/* src/App.js */
import React from 'react'
import PersistentDrawerLeft from './components/Drawer/Drawer';
import EmployeeTable from './components/DataTable/EmployeeTable';




const EmployeePage = () => {
  
  return (
    <div>
      <PersistentDrawerLeft />

      <main>
            <EmployeeTable />
      </main>
    
   </div>
  )
}

export default EmployeePage