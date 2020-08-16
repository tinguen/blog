import React from 'react'
import Container from '../container'
import Header from '../header'
import PostTitle from '../post-title'
import SignUpForm from './signup'

const SignUp = () => {
  return (
    <Container>
      <Header />
      <PostTitle>Create new account</PostTitle>
      <SignUpForm />
    </Container>
  )
}

export default SignUp
