import React from 'react'
import styled from 'styled-components'

type Props = {
  name: string
  body?: string
}
const StyledHeader = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  line-height: 1.375;
  font-weight: 150;
`

const Comment = ({ name, body }: Props) => {
  return (
    <div>
      <StyledHeader>
        {name}: {body}
      </StyledHeader>
    </div>
  )
}

export default Comment
