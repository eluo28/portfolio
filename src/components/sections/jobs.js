import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { CSSTransition } from "react-transition-group"
import styled from "styled-components"

const StyledJobsSection = styled.section`
  max-width: 1000px;
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

  .header {
    font-family: var(--font-playfair);
    font-size: 32px;
    float: right;
    margin-right: 64px;
  }

  .left {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: 64px;
    align-items: flex-end;
    width: 100%;
    // background-color: red;
    // justify-content: center;
  }
`

const StyledTabList = styled.ul`
  margin: 0 64px 0 0;
  position: relative;
  padding: 0 40px 0 0;
  width: max-content;
  float: right;
  z-index: 3;

  list-style: none;
`

const StyledTabButton = styled.div`
  display: flex;
  padding: 0 40px 0 0;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: var(--tab-height);
  border-right: 2px solid rgba(0, 0, 0, 0.05);

  justify-content: flex-end;
  font-size: var(--fz-xs);

  white-space: nowrap;

  span {
    margin-right: 20px;
  }
  &:hover,
  &:focus {
    h2 {
      opacity: 1;
    }
    h5 {
      opacity: 0.9;
    }
  }

  h2 {
    font-size: 16px;
    font-weight: 400;
    opacity: ${({ isActive }) => (isActive ? "1" : ".75")};
  }

  h5 {
    margin-right: 32px;
    font-weight: 300;
    opacity: ${({ isActive }) => (isActive ? ".9" : ".75")};
    font-size: 13px;
  }
`
const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  z-index: 10;
  width: 2px;
  margin-right: -2px;
  height: var(--tab-height);
  border-radius: 4px;
  background: black;

  transform: translateY(
    calc(${({ activeTabId }) => activeTabId} * var(--tab-height))
  );
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 0.5);
  transition-delay: 0.05s;
`

const StyledTabContent = styled.div`
  width: 100%;

  padding-top: 10px;
  padding-left: 64px;
  color: white;

  h1 {
    font-weight: 300;
    font-size: 24px;
  }

  h2 {
    font-weight: 600;
    font-size: 32px;
    margin-bottom: 8px;
  }

  h4 {
    font-weight: 300;
    margin-top: 26px;
    font-size: var(--fz-xs);
    display: flex;
    align-items: center;
    white-space: nowrap;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      opacity: 0.75;
      height: 1px;
      left: 100%;
      margin-left: 32px;
      width: 100vw;

      background-color: white;
    }
  }

  .container {
    display: flex;
  }

  ul {
    list-style: none;
    font-size: 14px;
    margin-top: 30px;
    padding: 0 0 0 24px;
    li {
      position: relative;
      line-height: 160%;
      padding-left: 24px;
      margin-bottom: 30px;
      &:before {
        content: ">";
        position: absolute;
        left: 0;
        color: white;
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/jobs/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              location
              range
              url
              season
            }
            html
          }
        }
      }
    }
  `)

  const jobsData = data.jobs.edges
  const [activeTabId, setActiveTabId] = useState(0)

  return (
    <StyledJobsSection id="jobs">
      <div className="inner">
        <Column>
          <div className="left">
            <h2 className="header">Where I’ve Worked</h2>
            <StyledTabList>
              {jobsData.map(({ node }, i) => {
                const { company, season } = node.frontmatter
                return (
                  <li key={i}>
                    <StyledTabButton
                      isActive={activeTabId === i}
                      onClick={() => setActiveTabId(i)}
                    >
                      <h5>{season}</h5>

                      <h2>{company}</h2>
                    </StyledTabButton>
                  </li>
                )
              })}
              <StyledHighlight activeTabId={activeTabId} />
            </StyledTabList>
          </div>
        </Column>
        <Column>
          {jobsData.map(({ node }, i) => {
            const { frontmatter, html } = node
            const { title, url, company, range } = frontmatter

            return (
              <CSSTransition
                key={i}
                in={activeTabId === i}
                timeout={250}
                classNames="fade"
              >
                <StyledTabContent id={`panel-${i}`} hidden={activeTabId !== i}>
                  <h1>
                    <h2> {title}</h2>
                    <div>&#64; {company}</div>
                  </h1>

                  <div className="container">
                    <h4>{range}</h4>
                  </div>

                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </StyledTabContent>
              </CSSTransition>
            )
          })}
        </Column>
      </div>
    </StyledJobsSection>
  )
}

export default Jobs
