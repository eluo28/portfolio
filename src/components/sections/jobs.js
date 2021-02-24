import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { CSSTransition } from "react-transition-group"
import styled from "styled-components"

const StyledJobsSection = styled.section`
  // background-color: white;

  .inner {
    display: flex;

    @media (max-width: 768px) {
      color: white;
      flex-direction: column;
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

    @media (max-width: 1080px) {
      margin-right: 32px;
    }
    @media (max-width: 768px) {
      margin-right: 64px;
      font-size: 24px;
    }
  }

  .left {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: 64px;
    align-items: flex-end;
    width: 100%;
  }
`

const StyledTabList = styled.ul`
  margin: 0 64px 0 0;
  position: relative;
  padding: 0 40px 0 0;
  width: max-content;
  float: right;
  // background-color: blue;
  z-index: 3;
  @media (max-width: 1080px) {
    margin: 0 32px 0 0;
  }
  @media (max-width: 768px) {
    margin-right: 64px;
  }

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

  @media (max-width: 768px) {
    border-right: 2px solid rgba(255, 255, 255, 0.3);
  }

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

  @media (max-width: 768px) {
    h2 {
      font-size: 12px;
    }
    h5 {
      font-size: 10px;
    }
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
  @media (max-width: 768px) {
    background: white;
    opacity: 0.8;
  }

  transform: translateY(
    calc(${({ activeTabId }) => activeTabId} * var(--tab-height))
  );
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 0.5);
  transition-delay: 0.05s;
`

const StyledTabContent = styled.div`
  // background-color: red;
  padding-top: 10px;
  margin-left: 64px;
  color: white;

  @media (max-width: 1080px) {
    margin-left: 32px;
  }

  h1 {
    font-weight: 300;
    font-size: 24px;
    margin-bottom: 8px;
  }

  h2 {
    font-weight: 600;
    font-size: 32px;
    margin-bottom: 4px;
  }

  h4 {
    font-weight: 300;

    font-size: var(--fz-xs);
    display: flex;
    align-items: center;
    white-space: nowrap;
  }

  .line {
    border-bottom: 1px solid white;
    width: 100%;
    content: " ";

    margin-left: 32px;
  }

  a {
    &:hover {
      border-bottom: 2px solid white;
    }
  }

  .container {
    // background-color: red;
    width: 100%;
    display: flex;
    align-items: center;
  }

  ul {
    width: 500px;
    list-style: none;
    font-size: 14px;
    margin-top: 14px;
    padding: 0 0 0 24px;

    @media (max-width: 1300px) {
      width: 400px;
    }

    @media (max-width: 1080px) {
      margin-left: 32px;
      width: 300px;
      padding: 0;
    }

    @media (max-width: 768px) {
      margin-left: 32px;
      max-width: 400px;
      padding: 0;
    }

    @media (max-width: 400px) {
      margin-left: 32px;
      width: 200px;
      padding: 0;
    }
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

  @media (max-width: 768px) {
    margin-left: 32px;

    h1 {
      font-size: 20px;
    }

    h2 {
      font-size: 24px;
    }

    h4 {
      font-size: 10px;
    }

    h5 {
      margin-left: 12px;
    }

    ul {
      padding: 0;
      li {
        font-size: 12px;
        margin-bottom: 16px;
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
                classNames="fade"
                timeout={250}
              >
                <StyledTabContent id={`panel-${i}`} hidden={activeTabId !== i}>
                  <h1>
                    <div>
                      <h2> {title}</h2>
                    </div>
                    <a href={url} rel="noopener noreferrer" target="_blank">
                      &#64; {company}
                    </a>
                  </h1>

                  <div className="container">
                    <h4>{range}</h4>
                    <div className="line"></div>
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
