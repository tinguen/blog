import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import Helmet from 'react-helmet'
import Container from '../container'
import Header from '../header'
import { getAllPosts } from '../../lib/api'
import PostBody from '../post-body'
import PostTitle from '../post-title'
import Comments from './comments'
import { Post } from '../../types'

const Home = () => {
  const { id }: { id: string } = useParams()
  const { loading, error, data, refetch } = useQuery(getAllPosts)
  useEffect(() => {
    console.log(data)
  }, [data])
  if (loading) return <PostTitle>Loading...</PostTitle>
  if (error) return <PostTitle>Error!</PostTitle>
  if (data.posts.map((post: Post) => post.id).indexOf(id) === -1)
    return <PostTitle>Error!</PostTitle>
  return (
    <Container>
      <Helmet>
        <title>{data.posts[data.posts.map((post: Post) => post.id).indexOf(id)].text}</title>
      </Helmet>
      <Header />
      <PostBody
        name={data.posts[data.posts.map((post: Post) => post.id).indexOf(id)].author.name || ''}
        content={
          data.posts[data.posts.map((post: Post) => post.id).indexOf(id)].text || 'No such post'
        }
      />
      <Comments
        comments={data.posts[data.posts.map((post: Post) => post.id).indexOf(id)].comments}
        id={id}
        refetch={refetch}
      />
    </Container>
  )
}

export default Home
