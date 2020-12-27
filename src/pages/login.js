import React, { useState } from 'react';
import { Form } from '../components'
import { Link, useHistory } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { auth } from '../firebase/config'
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
export default function Login() {
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isInvalid = email === '' || password === ''

  const handleSubmit = event => {
    event.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail('')
        setPassword('')
        history.push(ROUTES.HOME)
      })
      .catch(err => setError(err.message))

  }

  return (
    <Form>
      <Link to={ROUTES.HOME}>
        <Form.Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>
      <Form.Frame onSubmit={handleSubmit}>
        <Form.Title>Sign-In</Form.Title>
        <Form.Subtitle>Email</Form.Subtitle>

        <Form.Input 
          type="email" 
          value={email} 
          onChange={event => setEmail(event.target.value)} 
        />

        <Form.Subtitle>Password</Form.Subtitle>
        <Form.Input 
          type="password" 
          onChange={event => setPassword(event.target.value)}
          value={password}
        />
        {error && 
          <Form.Text style={{color: error ? 'red': ''}}>
          <ReportProblemOutlinedIcon style={{fill: "red"}} />
            {error}
          </Form.Text>
        }
        <Form.Button disabled={isInvalid}>Sign In</Form.Button>
        <Form.Text>By signing-in you agree to AMAZON CLONE. This is a clone demo purposes only!</Form.Text>
        <Link to={ROUTES.SIGN_UP}>
          <Form.Button className="register">Create Your Amazon Account</Form.Button>
        </Link>
      </Form.Frame>
    </Form>
  )
}