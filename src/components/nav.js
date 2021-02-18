import React from "react"
import styled from "styled-components"
import { navLinks } from "../config.js"
import { Link } from "gatsby"

const StyledHeader = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};

  position: fixed;
  top: 0;
  z-index: 11;
  width: 100%;
  height: 80px;
  // background-color: red;
`

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;

  @media (max-width: 768px) {
    display: none;
  }

  &:before {
    content: "";
    width: 120px;
    height: 1px;
    background-color: black;
    opacity: 0.25;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    list-style: none;
    li {
      margin: 0 24px;
      font-size: 13px;
    }
  }
`

const Nav = () => {
  return (
    <StyledHeader>
      <StyledLinks>
        <ol>
          {navLinks.map(({ url, name }, i) => (
            <li key={i}>
              <Link to={url}>{name}</Link>
            </li>
          ))}
        </ol>
      </StyledLinks>
    </StyledHeader>
  )
}

export default Nav
