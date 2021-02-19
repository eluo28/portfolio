import React from "react"
import styled from "styled-components"
import { email } from "../../config"

const StyledContactSection = styled.section`
  max-width: 1000px;
  display: flex;
`

const Column = styled.div`
  flex: 50%;

  h1 {
    color: white;
    margin-left: 64px;
    font-size: 32px;
    font-family: var(--font-playfair);
    display: flex;
    flex-direction: column;

    &:after {
      position: absolute;
      // top: 32px;
      content: "";
      width: 100%;
      height: 1px;
      opacity: 0.75;
      margin-top: 64px;
      background-color: white;
    }
  }

  .left {
    margin-right: 64px;

    p {
      font-size: 22px;
      line-height: 1.2;
      letter-spacing: 0.04em;
      text-align: right;
    }

    a {
      margin-top: 24px;
      color: white;
      width: 100%;
      height: 64px;
      border-radius: 4px;
      display: flex;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      background-color: rgb(18, 18, 18);
      box-shadow: 0px 7px 6.58px 0.42px rgba(18, 18, 18, 0.35);
    }
  }
`

const Contact = () => {
  return (
    <StyledContactSection id="contact">
      <Column>
        <div className="left">
          <p>
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>
          <a href={`mailto:${email}`}>Come say hi!</a>
        </div>
      </Column>
      <Column>
        <h1>Contact Me</h1>
      </Column>
    </StyledContactSection>
  )
}

export default Contact
