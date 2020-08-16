import styled from 'styled-components'
import React from 'react'
import Container from './container'

const StyledFooter = styled.footer`
  border-top-width: 1px;
  background: #fafafa;
  border-color: #eaeaea;
`

const StyledHeader = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 1.25;
  text-align: center;
  margin-bottom: 2.5rem;
  transition-duration: 200ms;
  transition-property: background-color, border-color, color, fill, stroke;
  @media (min-width: 1024px) {
    font-size: 2.75rem;
    text-align: left;
    margin-bottom: 0;
    padding-right: 1rem;
    width: 50%;
  }
`
const StyledLink1 = styled.a`
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  background: black;
  border: solid;
  border-width: 1px;
  border-color: black;
  color: white;
  font-weight: 700;
  padding: 0.75rem 3rem;
  margin-bottom: 1.5rem;
  text-decoration: none;
  &:hover {
    background: white;
    color: black;
  }
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
    margin-bottom: 0;
  }
`

const StyledLink2 = styled.a`
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`

const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
    flex-direction: row;
    padding-left: 1rem;
    width: 50%;
  }
`

const StyledContainer = styled.div`
  padding-top: 7rem;
  padding-bottom: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledContainer>
          <StyledHeader>Created by Duk Tkhin Nhuen</StyledHeader>
          <StyledLinkContainer>
            <StyledLink1 href="https://www.linkedin.com/in/duk-tkhin-nhuen/">
              Contact me
            </StyledLink1>
            <StyledLink2 href="https://github.com/tinguen/blog">View on GitHub</StyledLink2>
          </StyledLinkContainer>
        </StyledContainer>
      </Container>
    </StyledFooter>
  )
}

export default Footer
