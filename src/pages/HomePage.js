import React from 'react'
import HomeHeader from '../components/HomeHeader'
import Search from '../components/Search'
import EmployeeList from '../components/EmployeeList'
import employees from '../data'

export default function HomePage() {
  return (
    <div className='home'>
        <HomeHeader className='employeeHeader' />
        <Search className='search'/>
        <EmployeeList employees={employees}/>
    </div>
  )
}
