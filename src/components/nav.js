import React from "react"
import styled from "styled-components"
import { navLinks } from "../config.js"
import { Link } from "gatsby"
import Scrollspy from "react-scrollspy"

const StyledHeader = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};

  position: fixed;
  top: 0;
  z-index: 11;
  width: 100%;
  height: 80px;
  // background-color: red;
`

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;

  @media (max-width: 1080px) {
    // background-color: red;
    position: absolute;
    color: white;
    margin-top: 32px;
    display: block;
    top: 0;
    right: 0;
    text-align: right;
    li {
      padding-right: 8px;
    }

    &:before {
      display: none;
    }
  }

  &:before {
    content: "";
    width: 120px;
    height: 1px;
    background-color: black;
    opacity: 0.25;
    margin-right: 24px;
  }

  li {
    margin: 0 24px;
    font-size: 13px;
    opacity: 0.65;

    @media (max-width: 1080px) {
      // background-color: red;
      &:not(:first-child) {
        margin-top: 12px;
      }
    }

    &:hover,
    &:focus {
      opacity: 1;
    }
  }

  .nav__item--active {
    border-bottom: 2px solid black !important;
    opacity: 1;

    @media (max-width: 1080px) {
      border-bottom: 2px solid transparent !important;
      border-right: 2px solid white !important;
    }
  }

  .item {
    list-style-type: none;
    border-bottom: 2px solid transparent;
  }

  .inner {
    display: flex;
    margin: 0;
    padding: 0;

    @media (max-width: 1080px) {
      flex-direction: column;
    }
  }
`

const Nav = () => {
  return (
    <StyledHeader>
      <StyledLinks>
        <Scrollspy
          items={["about", "jobs", "contact"]}
          currentClassName="nav__item--active"
          className="inner"
          offset={-200}
        >
          {navLinks.map(({ url, name }, i) => (
            <li key={i} className="item">
              <Link to={url}>{name}</Link>
            </li>
          ))}
        </Scrollspy>
      </StyledLinks>
    </StyledHeader>
  )
}

export default Nav
