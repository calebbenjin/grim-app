import React from 'react'
import Layout from '../../../components/AdminLayout'
import Button from '../../../components/Button'

const ReadMessage = () => {
  return (
    <Layout>
      <h4>Read Message</h4>
      <hr />
      <div className="message-form">
        <h4 className="username">John Doe</h4>
        <form>
          <label>Title</label>
          <input type="text" value="Message Title" />
          <label>Body</label>
          <textarea value="Message"></textarea>
          <Button>Reply Message</Button>
        </form>
      </div>
    </Layout>
  )
}

export default ReadMessage
