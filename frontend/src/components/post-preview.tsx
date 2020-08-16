import { Link } from 'react-router-dom'
import styled from 'styled-components'
import React from 'react'

type Props = {
  text: string
  id: string
}

const StyledLink = styled.a`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
const StyledHeader = styled.h3`
  font-size: 1.875rem;
  margin-bottom: 0.75rem;
  line-height: 1.375;
`

const PostPreview = ({ text, id }: Props) => {
  return (
    <div>
      <StyledHeader>
        <Link to={`/posts/${id}`}>
          <StyledLink>{text}</StyledLink>
        </Link>
      </StyledHeader>
    </div>
  )
}

export default PostPreview
