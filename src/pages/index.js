import React from "react"
import { Layout, Hero, About, Jobs, Contact } from "../components"
import styled from "styled-components"

const StyledMainContainer = styled.main``

const IndexPage = () => {
  return (
    <Layout>
      <StyledMainContainer>
        <Hero />
        <About />
        <Jobs />
        <Contact />
      </StyledMainContainer>
    </Layout>
  )
}

export default IndexPage
