import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/AdminLayout'
import { useForm } from 'react-hook-form'
import Button from '../../components/Button'

const UserDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Layout>
      <h4>User Details</h4>
      <hr />
      <Container fluid>
        <div className='form-container'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col xl='6'>
                <div className='formControl'>
                  <label htmlFor='firstname'>First name</label>
                  <input
                    type='text'
                    placeholder='First name'
                    {...register('firstname')}
                  />
                </div>
              </Col>
              <Col xl='6'>
                <div className='formControl'>
                  <label htmlFor='lastname'>Last name</label>
                  <input
                    type='text'
                    placeholder='Last name'
                    {...register('lastname')}
                  />
                </div>
              </Col>
              <Col xl='6'>
                <div className='formControl'>
                  <label htmlFor='email'>Email Address</label>
                  <input
                    type='email'
                    placeholder='Email address'
                    {...register('email')}
                  />
                </div>
              </Col>
              <Col xl='6'>
                <div className='formControl'>
                  <label htmlFor='password'>password</label>
                  <input
                    type='text'
                    placeholder='Password'
                    {...register('password')}
                  />
                </div>
              </Col>
              <h5 className="mt-4">Bank Details</h5>
              <hr />
              <Col xl='6'>
                <div className='formControl'>
                  <label htmlFor='accountNum'>Account number</label>
                  <input
                    type='text'
                    placeholder='Account number'
                    {...register('accountNum')}
                  />
                </div>
              </Col>
              <Col xl='6'>
                <div className='formControl'>
                  <label htmlFor='Bank name'>Bank name</label>
                  <input
                    type='text'
                    placeholder='Bank name'
                    {...register('bankname')}
                  />
                </div>
              </Col>
              <Col xl='6'>
                <div className='formControl'>
                  <label htmlFor='refNum'>Reference Number</label>
                  <input
                    type='text'
                    placeholder='Reference Number'
                    {...register('refNum')}
                  />
                </div>
              </Col>
              <Col xl='6'>
                <div className='formControl'>
                  <label htmlFor='voulcherNum'>Voulcher Number</label>
                  <input
                    type='text'
                    placeholder='Voulcher Number'
                    {...register('voulcherNum')}
                  />
                </div>
              </Col>
              <h5 className="mt-4">Card Details</h5>
              <hr />
              <Col xl='6'>
                <div className='formControl'>
                  <label htmlFor='cardNum'>Card Number</label>
                  <input
                    type='text'
                    placeholder='Card Number'
                    {...register('cardNum')}
                  />
                </div>
              </Col>
              <Col xl='6'>
                <div className='formControl'>
                  <label htmlFor='voulcherNum'>CVC</label>
                  <input
                    type='text'
                    placeholder='CVC'
                    {...register('cvc')}
                  />
                </div>
              </Col>
            </Row>
            <Button>Save Changes</Button>
          </form>
        </div>
        {/* <Row>
          <Col lg='4'>
            <h2>
              <h1>Home</h1>
            </h2>
          </Col>
          <Col lg='8'>
            <div className="form-container">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col lg="6">
                    <div className="form-control">
                      <label htmlFor="firstname">First name</label>
                      <input type="text" placeholder="First name" {...register("firstname")}  />
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="form-control">
                      <label htmlFor="lastname">Last name</label>
                      <input type="text" placeholder="Last name" {...register("lastname")}  />
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row> */}
      </Container>
    </Layout>
  )
}

export default UserDetails
