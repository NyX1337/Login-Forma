import React, { useState } from 'react'
import LoginForm from './components/Loginform'

function App() {
  const ADMINUSER = {
    email: 'admin@admin.com',
    password: 'admin123',
  }

  const [user, setUser] = useState({ name: '', email: '' })
  const [error, setError] = useState('')

  const Login = (details) => {
    console.log(details)
    if (
      details.email === ADMINUSER.email &&
      details.password === ADMINUSER.password
    ) {
      console.log('Logged in')
      setUser({
        name: details.name,
        email: details.email,
      })
    } else {
      console.log('Upisani su krivi detalji!')
      setError('Upisani su krivi detalji!')
    }
  }

  const LOGOUT = () => {
    setUser({ name: '', email: '' })
  }

  return (
    <div className='App'>
      {user.email !== '' ? (
        <div className='welcome'>
          <h2>
            Dobrodošao, <span>{user.name}</span>
          </h2>
          <button onClick={LOGOUT}>Odjavi se</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  )
}

export default App
