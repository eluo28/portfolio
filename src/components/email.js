import React from "react"
import styled from "styled-components"
import { email } from "../config.js"
import Side from "./side.js"

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: white;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: white;
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-size: var(--fz-xxs);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`

const Email = () => (
  <Side orientation="right" top="bottom">
    <StyledLinkWrapper>
      <a href={`mailto:${email}`}>{email}</a>
    </StyledLinkWrapper>
  </Side>
)

export default Email
