import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { signUp } from '../../lib/api'
import { FormGroup, Label, Input, Button } from '../forms'

const SignUpForm = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [createUser, { loading, error }] = useMutation(signUp)

  return (
    <>
      <FormGroup>
        <Label>Email</Label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />

        <Label>Name</Label>
        <Input value={name} onChange={(e) => setName(e.target.value)} />

        <Label>Password</Label>
        <Input value={password} onChange={(e) => setPassword(e.target.value)} />

        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            if (!email || !password || !name) return
            createUser({ variables: { email, password, name } }).catch((err) => {
              console.log(err)
            })
            setEmail('')
            setName('')
            setPassword('')
          }}
        >
          Sign Up
        </Button>
        {loading && <p>Loading...</p>}
        {error && <p>Error :( Please try again</p>}
      </FormGroup>
    </>
  )
}

export default SignUpForm
