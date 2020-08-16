import React from 'react'
import styled from 'styled-components'
import Container from './container'

const StyledLink = styled.a`
  text-decoration: underline;
  color: #0070f3;
  transition-duration: 200ms;
  transition-property: background-color, border-color, color, fill, stroke;
`

const StyledContainer = styled.div`
  border-bottom-width: 1px;
  background: #fafafa;
  border-color: #eaeaea;
`

const StyledDiv = styled.div`
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  text-align: center;
  font-size: 0.875rem;
`

const Alert = () => {
  return (
    <StyledContainer>
      <Container>
        <StyledDiv>
          <>
            The source code for this blog is{' '}
            <StyledLink href="https://github.com/tinguen/blog">available on GitHub</StyledLink>.
          </>
        </StyledDiv>
      </Container>
    </StyledContainer>
  )
}

export default Alert
