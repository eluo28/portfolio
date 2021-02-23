import React, { useEffect } from "react"
import { GlobalStyle, theme } from "../styles"
import {
  Head,
  Nav,
  Social,
  Email,
  Resume,
  Footer,
  HeaderLogo,
} from "../components"
import styled, { ThemeProvider } from "styled-components"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ children }) => {
  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll("a"))
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute("rel", "noopener noreferrer")
          link.setAttribute("target", "_blank")
        }
      })
    }
  }

  useEffect(() => {
    handleExternalLinks()
  }, [])

  return (
    <>
      <Head />

      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StyledContent>
            <Nav />
            <Resume />
            <Social />
            <Email />
            <HeaderLogo />

            <div>
              {children} <Footer />
            </div>
          </StyledContent>
        </ThemeProvider>
      </div>
    </>
  )
}

export default Layout
