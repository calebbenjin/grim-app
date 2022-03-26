import React from 'react'
import Layout from '../../../components/AdminLayout'
import Table from '../../../components/Table'
import { users } from '../../../data'
import Link from 'next/link'

const MessagePage = () => {
  return (
    <Layout>
      <h3>All Messages</h3>
      <hr />
      <div className='tableCard'>
        <Table
          data={users}
          path="/admin/message"
        />
      </div>
    </Layout>
  )
}

export default MessagePage
