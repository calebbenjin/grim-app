import { useState } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

const SigninPage = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Layout>
      <main className='display-container'>
        <div className='form-container'>
          <div className='form'>
            <h3>Login to continue</h3>
            <form>
              <div className='input-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='Your email address' />
              </div>
              <div className='input-group'>
                <label htmlFor='password'>Password</label>
                <div className='password'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Your password'
                  />
                  <span onClick={handleShowPassword}>show</span>
                </div>
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

              <Link href='/signup'>
                <a className='btn-signup'>Sign up</a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default SigninPage
