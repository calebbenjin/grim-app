import { useState } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { useForm } from 'react-hook-form'

const SignPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Layout>
      <main className='container display-container'>
        <div className="form-container">
            <div className='form'>
            <h3 className="signout-title">Create an account. Its free!</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='input-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' {...register("email", { required: true })} placeholder='Your email address' />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className='input-group'>
                <label htmlFor='password'>Password</label>
                <div className='password'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    {...register("password", { required: true })}
                    placeholder='Your password'
                  />
                  <span onClick={handleShowPassword}>show</span>
                </div>
                {errors.password && <span>This field is required</span>}
              </div>
              <button className='login-btn'>Login</button>
              <p>
                <a className='forgetPassword' href='#'>
                  Forget password?
                </a>
              </p>
            </form>
            <h4>New to WorldRemit?</h4>
            <div className='signup'>
              <p>Signing up takes less than a minute</p>

              <Link href='/'>
                <a className='btn-signup'>Sign up</a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default SignPage
