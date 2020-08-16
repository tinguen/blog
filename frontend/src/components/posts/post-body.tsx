import styled from 'styled-components'
import React from 'react'

type Props = {
  name: string
  content: string | undefined
}

const StyledPostBody = styled.div`
  max-width: 42rem;
  margin-right: auto;
  margin-left: auto;
  div {
    font-size: 1.5rem;
    line-height: 1.625;
  }
`

const PostBody = ({ name, content = '' }: Props) => {
  return (
    <StyledPostBody>
      <div>By {name}</div>
      <div>{content}</div>
    </StyledPostBody>
  )
}

export default PostBody
