import React from 'react'
import { useQuery } from '@apollo/client'
import Container from './container'
import Intro from './intro'
import { getAllPosts } from '../lib/api'
import Posts from './posts'
import PostTitle from './post-title'

const Home = () => {
  const { loading, error, data } = useQuery(getAllPosts)
  if (loading) return <PostTitle>Loading...</PostTitle>
  if (error) return <PostTitle>Error!</PostTitle>
  return (
    <Container>
      <Intro />
      <Posts posts={data.posts} />
    </Container>
  )
}

export default Home
