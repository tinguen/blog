import React from 'react'
import Container from '../container'
import Header from '../header'
import PostTitle from '../post-title'
import CreatePost from './create-post'

const newPost = () => {
  return (
    <Container>
      <Header />
      <PostTitle>Create a new blog post</PostTitle>
      <CreatePost />
    </Container>
  )
}

export default newPost
