import React from 'react'

export default function EmployeeItem({ employee }) {
  return (
    <div className='employeeItem'>
        <img src={employee.img} alt={employee.name}></img>
        <h2 className='employeeText'>{employee.name}</h2>
        <p className='employeeTitle'>{employee.title}</p>


    </div>
  )
}
