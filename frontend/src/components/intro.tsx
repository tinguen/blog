import { Link } from 'react-router-dom'
import styled from 'styled-components'
import React from 'react'

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
`

const StyledHeader1 = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 1.25;
  @media (min-width: 768px) {
    font-size: 6.25rem;
    padding-right: 2rem;
  }
`

const StyledHeader4 = styled.h4`
  text-align: center;
  font-size: 1.125rem;
  margin-top: 1.25rem;
  @media (min-width: 768px) {
    text-align: left;
    padding-left: 2rem;
  }
`

const StyledLink = styled.a`
  cursor: pointer;
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

const Intro = () => {
  return (
    <StyledSection>
      <StyledHeader1>Blog.</StyledHeader1>
      <StyledHeader4>
        <Link to="/posts/new">
          <StyledLink>Create new post</StyledLink>
        </Link>
      </StyledHeader4>
    </StyledSection>
  )
}

export default Intro
