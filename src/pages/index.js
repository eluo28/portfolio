import React from "react"
import { Layout, Hero, About } from "../components"
import styled from "styled-components"

const StyledMainContainer = styled.main``

const IndexPage = () => {
  return (
    <Layout>
      <StyledMainContainer>
        <Hero />
        <About />
      </StyledMainContainer>
    </Layout>
  )
}

export default IndexPage
