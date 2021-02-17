import React, { useState, useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { CSSTransition } from "react-transition-group"
import styled from "styled-components"

const StyledJobsSection = styled.section`
  max-width: 800px;
  // background-color: white;
  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }
  }
`

const Column = styled.div`
  flex: 50%;
`

const StyledTabList = styled.ul`
  margin: 0 80px 0 0;

  z-index: 3;
  padding: 0;
  list-style: none;
`

const StyledTabButton = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 42px;
  padding: 0 40px 0 0;
  border-right: 2px solid black;

  justify-content: flex-end;
  font-size: var(--fz-xs);

  white-space: nowrap;

  &:hover,
  &:focus {
    background-color: white;
  }
`

const StyledTabContent = styled.div`
  width: 100%;

  color: white;
`

const Jobs = () => {
  let companies = ["Visa", "Minos Labs", "Commvault"]
  return (
    <StyledJobsSection>
      <h2>Where I’ve Worked</h2>

      <div className="inner">
        <Column>
          <StyledTabList>
            {companies.map((company, i) => (
              <li key={i}>
                <StyledTabButton>{company}</StyledTabButton>
              </li>
            ))}
          </StyledTabList>
        </Column>
        <Column>
          <StyledTabContent>
            {companies.map(company => (
              <div>{company}</div>
            ))}
          </StyledTabContent>
        </Column>
      </div>
    </StyledJobsSection>
  )
}

export default Jobs
