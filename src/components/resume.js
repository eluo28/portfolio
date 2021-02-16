import React from "react"
import styled from "styled-components"
import Side from "./side.js"
import { Link } from "gatsby"

const StyledResume = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: white;

  @media (max-width: 768px) {
    display: none;
  }

  &:before {
    content: "";
    width: 1px;
    height: 90px;
    background-color: white;
    opacity: 0.75;
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

const Resume = () => (
  <Side orientation="right" top="top">
    <StyledResume>
      <Link to="#">Resume</Link>
    </StyledResume>
  </Side>
)

export default Resume
