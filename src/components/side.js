import React from "react"
import styled from "styled-components"

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  top: ${props => (props.top === "top" ? "0" : "auto")};
  bottom: ${props => (props.top === "top" ? "auto" : "0")};
  left: ${props => (props.orientation === "left" ? "40px" : "auto")};
  right: ${props => (props.orientation === "left" ? "auto" : "40px")};
  z-index: 10;

  @media (max-width: 1080px) {
    left: ${props => (props.orientation === "left" ? "20px" : "auto")};
    right: ${props => (props.orientation === "left" ? "auto" : "20px")};
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const Side = ({ children, orientation, top }) => {
  return (
    <StyledSideElement orientation={orientation} top={top}>
      {children}
    </StyledSideElement>
  )
}

export default Side
