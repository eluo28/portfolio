import React from "react"
import styled from "styled-components"

const StyledSideElement = styled.div`
 
  position: fixed;
  top: ${props => (props.top === "top" ? "0" : "auto")};
  bottom: ${props => (props.top === "top" ? "auto" : "0")};
  left: ${props => (props.orientation === "left" ? "40px" : "auto")};
  right: ${props => (props.orientation === "left" ? "auto" : "40px")};
  z-index: 10;
`

const Side = ({ children, orientation, top }) => {
  return (
    <StyledSideElement orientation={orientation} top={top}>
      {children}
    </StyledSideElement>
  )
}

export default Side
