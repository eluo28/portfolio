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

  @media (max-width: 900px) {
    display: none;
  }

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: white;
    opacity: 0.75;
  }

  a {
    font-family: var(--font-roboto);
    opacity: 0.75;
    margin: 20px auto;
    padding: 10px;
    font-size: var(--fz-xxs);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    &:hover,
    &:focus {
      opacity: 1;
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
