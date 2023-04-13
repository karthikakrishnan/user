import React, { useState } from 'react'

import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import styles from './login.css'

const Login = () => {
  const [login, setLogin] = useState({userName: '', password: ''})
  const [errorMessage, setErrorMessage] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setLogin((prevProps) => ({
      ...prevProps,
      [name]: value
    })
  )
  }

  const loginUser = () => {
    const { userName, password } = login
    if(userName === password) {
      setErrorMessage(false)
    } else {
      setErrorMessage(true)
    }
  }

  return (
    <form>
    <div className="App">
      <header className="App-header">
        <TextField 
          id="userName"
          name='userName'
          label="User name"
          variant="outlined"
          value={login.userName}
          onChange={handleInputChange}
        />
        <TextField
          id="password"
          name='password'
          label="Password"
          variant="outlined"
          value={login.password}
          onChange={handleInputChange}
        />
        { errorMessage && <Alert id="loginError" severity="error">Invalid credentials</Alert> }
        {!errorMessage && <Alert severity="success" id="validLogin">Login successful</Alert> }
        <Button id='login' onClick={loginUser} variant="contained" type='button'>Login</Button>
      </header>
    </div>
    </form>
  );
}

export default Login
