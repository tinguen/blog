import styled from 'styled-components'
import React from 'react'
import Comment from './comment'
import { Comment as CommentType } from '../../types'
import CreateComment from './create-comment'
import { Button } from '../forms'

type Props = {
  comments: CommentType[]
  id: string
  refetch: Function
}

const StyledHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.25;
  margin-bottom: 1rem;
  margin-top: 2rem;
  @media (min-width: 768px) {
    font-size: 2.25rem;
    letter-spacing: -0.05em;
  }
`

const StyledCommentsContainer = styled.div`
  margin-bottom: 8rem;
`

const Comments = ({ comments, id, refetch }: Props) => {
  console.log(comments)
  return (
    <section>
      <StyledCommentsContainer>
        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            refetch()
          }}
        >
          Refresh
        </Button>
        <StyledHeader>Comments</StyledHeader>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              author={comment.author}
              body={comment.text}
              name={comment.author?.name}
            />
          )
        })}
        <CreateComment id={id} />
      </StyledCommentsContainer>
    </section>
  )
}

export default Comments
