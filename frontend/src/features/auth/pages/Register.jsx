import React from 'react'
import { useNavigate } from 'react-router'

const Register = () => {
  
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <main>
      <div className="form-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>


        <div className="input-group">
          <label htmlFor="userName">User Name</label>
          <input type="text" id="userName" name='userName' placeholder='Enter User Name' />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name='email' placeholder='Enter Email address' />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name='password' placeholder='Enter Password' />
        </div>

        <button className='button primary-button' type='submit'>Register</button>

      </form>

      <p>Already have an account? <button className='button' onClick={() => navigate('/login')}>Login</button></p>
      </div>
    </main>
  )
}

export default Register
