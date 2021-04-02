import React from "react"
import styled from "styled-components"
import { socialMedia } from "../config.js"
import { Icon } from "../components/icons"
import { email } from "../config.js"

const StyledFooter = styled.footer`
  height: 80px;
  margin: 0 auto;
  width: 100%;
  align-items: center;
  padding-top: 100px;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  font-size: 13px;

  @media (max-width: 768px) {
    color: white;
    font-size: 10px;
  }
`
const Column = styled.div`
  flex: 50%;

  .left {
    margin-right: 64px;
    text-align: right;
  }

  .right {
    margin-left: 64px;
    color: white;
  }

  @media (min-width: 768px) {
    .left {
      a {
        display: none;
      }
    }
  }

  @media (max-width: 768px) {
    .left {
      span {
        display: none;
      }
      margin: 0 16px 0 0;
    }

    .right {
      display: none;
    }
  }
`

const StyledSocialLinks = styled.ul`
  display: flex;

  padding-left: 16px;
  list-style: none;
  li {
    a {
      padding: 10px;

      svg {
        width: 16px;
        height: 16px;
      }
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <Column>
        <div className="left">
          <span>Created by Edwin Luo</span>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </Column>
      <Column>
        <div className="right">logo</div>
        <StyledSocialLinks>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </StyledSocialLinks>
      </Column>
    </StyledFooter>
  )
}

export default Footer
