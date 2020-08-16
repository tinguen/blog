import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { auth } from '../../lib/api'
import { FormGroup, Label, Input, Button } from '../forms'

const SignUpForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login, { data, loading, error }] = useMutation(auth)

  useEffect(() => {
    if (data?.auth?.token) localStorage.setItem('token', data.auth.token)
  }, [data])

  return (
    <>
      <FormGroup>
        <Label>Email</Label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />

        <Label>Password</Label>
        <Input value={password} onChange={(e) => setPassword(e.target.value)} />

        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            if (!email || !password) return
            login({ variables: { email, password } }).catch((err) => {
              console.log(err)
            })
            setEmail('')
            setPassword('')
          }}
        >
          Login
        </Button>
        {loading && <p>Loading...</p>}
        {error && <p>Error :( Please try again</p>}
      </FormGroup>
    </>
  )
}

export default SignUpForm
