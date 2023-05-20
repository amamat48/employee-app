import React from 'react'
import EmployeeHeader from '../components/EmployeeHeader'
import employees from '../data'
import SingleEmployee from '../components/SingleEmployee'

export default function EmployeePage() {
  return (
    <div className='employeePageContainer'>
        <EmployeeHeader />
        <SingleEmployee employee={employees[1]}/>
    </div>
  )
}
