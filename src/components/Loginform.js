import React, { useState } from 'react'

function Loginform({ Login, error }) {
  const [details, setDetails] = useState({ name: '', email: '', password: '' })

  const SUBMITHANDLER = (e) => {
    e.preventDefault()

    Login(details)
  }

  return (
    <form onSubmit={SUBMITHANDLER}>
      <div className='form-inner'>
        <h2>LOGIN</h2>
        {error !== '' ? <div className='error'>{error}</div> : ''}
        <div className='form-group'>
          <label htmlFor='name'>Ime: </label>
          <input
            type='text'
            name='name'
            id='name'
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email: </label>
          <input
            type='text'
            name='email'
            id='email'
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            name='password'
            id='password'
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input type='submit' value='Prijavi se' />
      </div>
    </form>
  )
}

export default Loginform
