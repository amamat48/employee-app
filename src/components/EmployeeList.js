import React from 'react'
import EmployeeItem from './EmployeeItem'


export default function EmployeeList({ employees }) {
    return (
        <>
        {
            employees.map((employee) => {

                return (
                    <div className='employeeItemContainer'>
                        <EmployeeItem employee={employee} />
                    </div>
                )
            })
        }
        </>

    )
}
