import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Icon } from "../../components/icons"

const StyledProjectsSection = styled.section`
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

  .right {
    position: relative;
    width: 100%;
  }

  .projects-grid {
    // background-color: red;
    display: grid;
    grid-template-columns: repeat(2, 240px);
    grid-gap: 24px;
    margin-left: 64px;

    @media (max-width: 1300px) {
      grid-template-columns: repeat(1, 240px);
    }

    @media (max-width: 1080px) {
      margin-left: 32px;
    }
  }

  .view {
    color: white;
    position: absolute;
    right: 16px;
    top: 50%;
    opacity: 0.75;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`

const LeftCol = styled.div`
  text-align: right;
  // background-color: red;
  margin-right: 64px;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 64px;
  align-items: flex-end;

  @media (max-width: 1080px) {
    margin-right: 32px;
  }

  .container {
    // background-color: red;
    display: flex;

    justify-content: flex-end;
  }

  h1 {
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
    position: relative;

    &:before {
      content: "";
      position: absolute;
      opacity: 0.75;
      height: 1px;
      right: 100%;
      margin-right: 32px;

      width: 100vw;

      background-color: black;
    }
  }
`

const StyledTabList = styled.ul`
  position: relative;
  width: max-content;
  float: right;
  z-index: 3;

  list-style: none;
  font-family: var(--font-roboto);
  font-size: 16px;
  font-weight: 500;
`

const StyledTabButton = styled.div`
  margin-bottom: 12px;
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? "1" : ".5")};
  height: var(--tab-height);

  &:hover,
  &:focus {
    opacity: 1;
  }
`

const StyledProject = styled.div`
  color: white;

  .project-inner {
    // background-color: red;
    box-shadow: 0px 7px 6.58px 0.42px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    padding: 20px;
    width: 200px;
    height: 200px;

    display: flex;
    flex-direction: column;
    position: relative;
  }

  .top {
    margin-bottom: 10px;
    ${({ theme }) => theme.mixins.flexBetween};
  }

  .links {
    display: flex;
    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 4px 6px;

      &.external {
        svg {
          width: 20px;
          height: 20px;
          margin-top: -2px;
        }
      }

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }

  .title {
    font-weight: 700;
    font-size: 20px;
  }

  .description {
    opacity: 0.9;
    font-size: 12px;
  }

  .tech {
    // background-color: red;
    position: absolute;
    bottom: 0;
    display: flex;

    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;

    list-style: none;

    li {
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              date
              title
              github
              external
              tech
              category
            }
            html
          }
        }
      }
    }
  `)

  const projectsData = data.projects.edges
  const [activeTabCat, setActiveTabCat] = useState("All")

  let showing = 0

  const [width, setWidth] = React.useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
  })

  let maxShow = width >= 1300 ? 4 : 2

  const categories = ["All", "Web Development", "Machine Learning", "Scripts"]

  const isHidden = (category, activeCat) => {
    if (category === activeCat || activeCat === "All") {
      showing += 1
    }

    if (showing > maxShow) {
      return true
    }

    if (activeCat !== "All") {
      return category !== activeCat
    } else {
      return false
    }
  }

  return (
    <StyledProjectsSection id="projects">
      <div className="inner">
        <Column>
          <LeftCol>
            <h1>Projects</h1>

            <div className="container">
              <h4>From a Variety of Categories</h4>
            </div>
            <StyledTabList>
              {categories.map((category, i) => (
                <li key={i}>
                  <StyledTabButton
                    isActive={activeTabCat === category}
                    onClick={() => setActiveTabCat(category)}
                  >
                    {category}
                  </StyledTabButton>
                </li>
              ))}
            </StyledTabList>
          </LeftCol>
        </Column>

        <Column>
          <div className="right">
            <div className="projects-grid">
              {projectsData.map(({ node }, i) => {
                const { frontmatter, html } = node
                const { title, github, external, tech, category } = frontmatter

                return (
                  <StyledProject
                    hidden={isHidden(category, activeTabCat)}
                    key={i}
                  >
                    <div className="project-inner">
                      <div className="top">
                        <div>logo</div>
                        <div className="links">
                          {github && (
                            <a
                              href={github}
                              aria-label="GitHub Link"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <Icon name="GitHub" />
                            </a>
                          )}
                          {external && (
                            <a
                              href={external}
                              aria-label="External Link"
                              className="external"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <Icon name="External" />
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="title">{title}</div>
                      <div
                        className="description"
                        dangerouslySetInnerHTML={{ __html: html }}
                      />

                      <footer>
                        {tech && (
                          <ul className="tech">
                            {tech.map((tech, i) => (
                              <li key={i}>{tech}</li>
                            ))}
                          </ul>
                        )}
                      </footer>
                    </div>
                  </StyledProject>
                )
              })}
            </div>
            <div className="view" hidden={showing <= 4}>
              View More &gt;&gt;
            </div>
          </div>
        </Column>
      </div>
    </StyledProjectsSection>
  )
}

export default Projects
