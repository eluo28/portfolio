import React from "react"
import { Helmet } from "react-helmet"
import { Layout } from "../components"
import styled from "styled-components"

const Default = styled.div`
  min-height: 100vh;
  ${({ theme }) => theme.mixins.flexCenter};
  color: white;
  mix-blend-mode: difference;
  font-size: 64px;
`

const NotFoundPage = () => {
  return (
    <Layout>
      <Helmet title="Page Not Found" />

      <Default>404</Default>
    </Layout>
  )
}

export default NotFoundPage
