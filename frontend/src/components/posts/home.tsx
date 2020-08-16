import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import Helmet from 'react-helmet'
import Container from '../container'
import Header from '../header'
import PostBody from './post-body'
import PostTitle from '../post-title'
import Comments from './comments'
import { getUser, deletePost, getAllPosts } from '../../lib/api'
import { Post, User } from '../../types'
import { Button } from '../forms'

function canDelete(user: User, post: Post): boolean {
  if (user.role === 'Admin' || user.id === post.author.id) return true
  return false
}

const Home = () => {
  const { id }: { id: string } = useParams()
  const { loading, error, data, refetch } = useQuery(getAllPosts)
  const { data: userData } = useQuery(getUser)
  const [removePost] = useMutation(deletePost)

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
      {userData?.user?.id &&
        canDelete(
          userData.user,
          data.posts[data.posts.map((post: Post) => post.id).indexOf(id)]
        ) && (
          <Button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              removePost({ variables: { id } })
            }}
          >
            Delete post
          </Button>
        )}
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
