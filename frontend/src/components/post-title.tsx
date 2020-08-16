import React, { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children?: ReactNode
}

const StyledTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 1.25;
  margin-bottom: 3rem;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 4.5rem;
    line-height: 1;
    text-align: left;
  }
  @media (min-width: 1024px) {
    font-size: 5rem;
  }
`

const PostTitle = ({ children }: Props) => {
  return <StyledTitle>{children}</StyledTitle>
}

export default PostTitle
