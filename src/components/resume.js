import React from "react"
import styled from "styled-components"
import Side from "./side.js"
import resume from "../images/Edwin Luo Resume.pdf"

const StyledResume = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: white;

  font-family: var(--font-roboto);
  @media (max-width: 1080px) {
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

const Resume = () => (
  <Side orientation="right" top="top">
    <StyledResume>
      <a href={resume} target="blank">
        Resume
      </a>
    </StyledResume>
  </Side>
)

export default Resume
