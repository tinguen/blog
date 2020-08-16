import React from 'react'
import Container from '../container'
import Header from '../header'
import PostTitle from '../post-title'
import LoginForm from './login'

const Login = () => {
  return (
    <Container>
      <Header />
      <PostTitle>Login</PostTitle>
      <LoginForm />
    </Container>
  )
}

export default Login
