import styled from 'styled-components'
import React from 'react'
import PostPreview from './post-preview'
import { Post } from '../types'

type Props = {
  posts: Post[]
}

const StyledPostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 5rem;
  margin-bottom: 8rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 4rem;
    row-gap: 8rem;
  }
  @media (min-width: 1028px) {
    column-gap: 8rem;
  }
`

const Posts = ({ posts }: Props) => {
  return (
    <section>
      <StyledPostsContainer>
        {posts.map((post) => (
          <PostPreview key={post.id} text={post.text} id={post.id} />
        ))}
      </StyledPostsContainer>
    </section>
  )
}

export default Posts
