import React from "react"
import styled from "styled-components"
import { email } from "../../config"

const StyledContactSection = styled.section`
  display: flex;

  @media (max-width: 768px) {
    color: white;
  }
`

const Column = styled.div`
  flex: 50%;

  h1 {
    color: white;
    margin-left: 64px;
    font-size: 32px;
    font-family: var(--font-playfair);

    width: calc(100%-64px);

    padding-bottom: 32px;
    border-bottom: 1px solid white;

    @media (max-width: 1080px) {
      margin-left: 32px;
    }

    @media (max-width: 768px) {
      margin-left: 16px;
      font-size: 24px;
    }
  }

  .left {
    text-align: right;
    max-width: 400px;

    margin-right: 64px;
    margin-left: auto;

    @media (max-width: 1080px) {
      margin-right: 32px;
      margin-left: 64px;
    }

    p {
      font-size: 22px;
     
      letter-spacing: 0.01em;
      text-align: center;
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
    @media (max-width: 768px) {
      margin: 0 0 0 32px;
      p {
        display: none;
      }

      a {
        box-shadow: 0px 7px 6.58px 0.42px rgba(0, 0, 0, 0.6);
        border-radius: 10px;
        height: 40px;
        margin: 64px 0 0 0;
        font-size: 10px;
      }
    }
  }
`

const Contact = () => {
  return (
    <StyledContactSection id="contact">
      <Column>
        <div className="left">
          <p>
            My inbox is always open for new opportunities.
            <br />
            <br />
            Feel free to reach out!
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
