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
`

const StyledTabList = styled.ul`
  margin: 0 80px 0 0;
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

  opacity: ${({ isActive }) => (isActive ? "1" : ".5")};
  justify-content: flex-end;
  font-size: var(--fz-xs);

  white-space: nowrap;

  span {
    margin-right: 20px;
  }

  &:hover,
  &:focus {
    background-color: white;
  }
`
const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: 4px;
  background: black;
  opacity: 0.5;
  transform: translateY(
    calc(${({ activeTabId }) => activeTabId} * var(--tab-height))
  );
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
`

const StyledTabContent = styled.div`
  width: 100%;

  padding-top: 10px;
  padding-left: 30px;
  color: white;

  h1 {
    font-weight: 400;
    font-size: var(--fz-lg);
  }

  span {
    font-weight: 600;
    font-size: var(--fz-xxl);
  }

  h4 {
    font-weight: 300;

    font-size: var(--fz-xs);
    display: flex;
    align-items: center;
    &:after {
      margin-left: 16px;
      content: "";
      width: 300px;
      height: 1px;

      background-color: white;
    }
  }

  ul {
    list-style: none;
    font-size: var(--fz-md);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: "▹";
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
          <h2>Where I’ve Worked</h2>
          <StyledTabList>
            {jobsData.map(({ node }, i) => {
              const { company, season } = node.frontmatter
              return (
                <li key={i}>
                  <StyledTabButton
                    isActive={activeTabId === i}
                    onClick={() => setActiveTabId(i)}
                  >
                    <span>{season}</span>
                    {company}
                  </StyledTabButton>
                </li>
              )
            })}
            <StyledHighlight activeTabId={activeTabId} />
          </StyledTabList>
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
                    <span> {title}</span> &nbsp;@&nbsp; {company}
                  </h1>
                  <h4>{range}</h4>
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
