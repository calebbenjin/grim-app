import { useState } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { useForm } from 'react-hook-form'
import { Col, Row } from 'react-bootstrap'

const SignPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Layout>
      <main className='container display-container'>
        <div className='signup-container'>
          <div className='form'>
            <h3 className='signout-title'>Create an account. Its free!</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col lg='6'>
                  <div className='input-group'>
                    <label htmlFor='text'>First name</label>
                    <input
                      type='text'
                      {...register('firstname', { required: true })}
                      placeholder='Your firstname'
                    />
                    {errors.firstname && <span>This field is required</span>}
                  </div>
                </Col>
                <Col lg='6'>
                  <div className='input-group'>
                    <label htmlFor='lastname'>Last name</label>
                    <input
                      type='text'
                      {...register('lastname', { required: true })}
                      placeholder='Your Last name'
                    />
                    {errors.lastname && <span>This field is required</span>}
                  </div>
                </Col>
                <Col lg='6'>
                  <div className='input-group'>
                    <label htmlFor='accountNum'>Account Number</label>
                    <input
                      type='text'
                      {...register('accountNum', { required: true })}
                      placeholder='Your Account Number'
                    />
                    {errors.accountNum && <span>This field is required</span>}
                  </div>
                </Col>
                <Col lg='6'>
                  <div className='input-group'>
                    <label htmlFor='accountName'>Account Name</label>
                    <input
                      type='text'
                      {...register('accountName', { required: true })}
                      placeholder='Your Account Name'
                    />
                    {errors.accountNum && <span>This field is required</span>}
                  </div>
                </Col>
                <Col lg='6'>
                  <div className='input-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                      type='email'
                      {...register('email', { required: true })}
                      placeholder='Your email address'
                    />
                    {errors.email && <span>This field is required</span>}
                  </div>
                </Col>
                <Col lg='6'>
                  <div className='input-group'>
                    <label htmlFor='password'>Password</label>
                    <div className='password'>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        {...register('password', { required: true })}
                        placeholder='Your password'
                      />
                      <span onClick={handleShowPassword}>show</span>
                    </div>
                    {errors.password && <span>This field is required</span>}
                  </div>
                </Col>
              </Row>

              
              <button className='login-btn'>Sign up</button>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default SignPage
