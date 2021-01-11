import React, { useState, useEffect } from 'react';
import { Form } from '../components'
import { Link, useHistory } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { auth } from '../firebase/config'

import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';

export default function Signup() {
  const history = useHistory()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordTwo, setPasswordTwo] = useState('')
  const [error, setError] = useState('')
  const [emailError, setEmailError] = useState('')
  //Workd on Disabled button for submit if form field completion errors
  //add focus to first input
  const isInvalid = (
    name === '' ||
    email === ''|| 
    password.length <= 6 || 
    passwordTwo.length <= 6
  )

  const handleSubmit = event => {
    event.preventDefault()

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(result => 
        result.user
        .updateProfile({
          displayName: name
        })
        .then(() => {
          setName('')
          setEmail('')
          setPassword('')
          setPasswordTwo('')
          setError('')
          history.push(ROUTES.HOME)
        })
      ).catch(error => setEmailError(error.message))
  }

  useEffect(()=>{
    if (password.length <= passwordTwo.length || password.length >= passwordTwo.length) {
      password !== passwordTwo ? setError('Passwords do not match') : setError('')
    } else {
      setError('')
    }
  }, [passwordTwo])

  return (
    <Form>
      <Link to={ROUTES.HOME}>
        <Form.Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>
      <Form.Frame onSubmit={handleSubmit}>
        <Form.Title>Create account</Form.Title>
        <Form.Subtitle>Your name</Form.Subtitle>
        <Form.Input 
          type="text" 
          value={name} 
          onChange={event => setName(event.target.value)}
        />
        <Form.Subtitle>Email</Form.Subtitle>
        <Form.Input 
          className={emailError && 'error'}
          style={{background: emailError ? '#fffab8' : ''}}
          type="email" 
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        {emailError && 
          <Form.Text style={{color: "red"}} >
            <ReportProblemOutlinedIcon style={{fill: "red"}} />
            {emailError}
          </Form.Text>
        }
        <Form.Subtitle>Password</Form.Subtitle>
        <Form.Input 
          className={error && 'error'}
          style={{background: error ? '#fffab8' : ''}}
          type="password" 
          autocomplete="off"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        {password.length < 7 && 
          <Form.Text>
            <ReportProblemOutlinedIcon />
            Passwords must consist of at least 6 characters.
          </Form.Text>
        }
        <Form.Subtitle>Password again</Form.Subtitle>
        <Form.Input 
          className={error && 'error'}
          type="password" 
          autocomplete="off"
          value={passwordTwo}
          onChange={event => setPasswordTwo(event.target.value)}
        />
        {error &&
          <Form.Text style={{color: "red"}}>
            <ReportProblemOutlinedIcon style={{fill: "red"}} />
            {error}
          </Form.Text>
        }
        <Form.Button disabled={error || isInvalid}>Create Your Amazon Account</Form.Button>
        <Form.Text>By signing-up you agree to AMAZON'S CLONE.
          <br/>
          <Form.Link>Conditions of Use</Form.Link> and <Form.Link> Privacy Notice</Form.Link>.
        </Form.Text>
        <hr />

        <Form.Break>
          <Form.Text>Already have an account? <Form.Link to={ROUTES.LOGIN}>Sign In <ArrowRightOutlinedIcon/></Form.Link></Form.Text>
        </Form.Break>
      </Form.Frame>
    </Form>
  )
}