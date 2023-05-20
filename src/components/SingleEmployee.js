import React from 'react'

export default function SingleEmployee({ employee }) {
    console.log(employee)
    return (
        <>
            <div className='singleEmployeeContainer'>
                <img href={employee.img} alt='employee'></img>
                <h1 className='employeeName'>{employee.name}</h1>
                <p className='singleEmployeeTitle'>{employee.title}</p>


                <p className='singleEmployee'>Email: <br />{employee.email}</p>
                <p className='singleEmployee'>Call Mobile: <br />{employee.mobile}</p>
                <p className='singleEmployee'>Call Office: <br />{employee.office}</p>
            </div>
        </>
    )
}
