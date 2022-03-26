import React from 'react'
import Layout from '../../components/AdminLayout'
import Table from '../../components/Table'
import { users } from '../../data'

const AdminPage = () => {
  return (
    <Layout>
      <h3>All Users</h3>
      <hr />
      <div className='tableCard'>
        <Table data={users} path="/admin" />
      </div>
    </Layout>
  )
}

export default AdminPage
