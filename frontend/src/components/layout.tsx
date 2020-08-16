import styled from 'styled-components'
import React from 'react'
import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

type Props = {
  children: React.ReactNode
}

const StyledContainer = styled.div`
  min-height: 100vh;
`

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <StyledContainer>
        <Alert />
        <main>{children}</main>
      </StyledContainer>
      <Footer />
    </>
  )
}

export default Layout
