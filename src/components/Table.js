import React from 'react'
import Link from 'next/link'

const Table = ({ data, path }) => {

  const handelDelete = (id) => {
    if (confirm('Are you sure you want to delete this user')) {
      console.log('This user is deleted');
    } else {
      console.log('This user is not deleted');
    }
  }

  return (
    <table className='styled-table'>
      <thead>
        <tr>
          <th>S/N</th>
          <th>Name</th>
          <th>Email</th>
          <th>Amount</th>
          <th>Password</th>
          <th>Reference Num</th>
          <th>voulcher num</th>
          <th>Tax code</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.amount}</td>
            <td>{user.password}</td>
            <td>{user.referenceNum}</td>
            <td>{user.voulcherNum}</td>
            <td>{user.taxCode}</td>
            <td>
              <Link href={`${path}/${user.id}`}>
                <button className='edit'>Edit</button>
              </Link>
              <button onClick={() => handelDelete(user.id)} className='delete'>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
