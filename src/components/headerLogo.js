import React from "react"
import styled from "styled-components"

const StyledHeaderLogo = styled.div`
  display: flex;
  align-items: center;
  position: fixed;

  // background-color: red;

  @media (min-width: 1080px) {
    display: none;
  }

  @media (max-width: 1080px) {
    color: black;

    left: 0;

    &:before {
      content: "";
      width: 40px;
      height: 1px;
      background-color: black;
      opacity: 0.75;
    }

    div {
      opacity: 0.75;
      margin: 20px auto;
      padding: 10px;
      font-size: 14px;
      letter-spacing: 0.1em;
    }
  }

  @media (max-width: 768px) {
    color: white;
    &:before {
      background-color: white;
    }
  }
`

const HeaderLogo = () => (
  <StyledHeaderLogo>
    <div>Edwin Luo</div>
  </StyledHeaderLogo>
)

export default HeaderLogo
