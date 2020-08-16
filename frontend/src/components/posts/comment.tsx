import React from 'react'
import styled from 'styled-components'
import { useQuery, useMutation } from '@apollo/client'
import { getUser, deleteComment } from '../../lib/api'
import { Button } from '../forms'
import { User } from '../../types'

type Props = {
  id: string
  name: string
  body: string
  author: User
}
const StyledHeader = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  line-height: 1.375;
  font-weight: 150;
`

function canDelete(user: User, author: User): boolean {
  if (user.role === 'Admin' || user.id === author.id) return true
  return false
}

const Comment = ({ id, name, body, author }: Props) => {
  const { data: userData } = useQuery(getUser)
  const [removeComment] = useMutation(deleteComment)
  return (
    <div>
      {userData?.user?.id && canDelete(userData.user, author) && (
        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            removeComment({ variables: { id } })
          }}
        >
          Delete comment
        </Button>
      )}
      <StyledHeader>
        {name}: {body}
      </StyledHeader>
    </div>
  )
}

export default Comment
