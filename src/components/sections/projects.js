import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { CSSTransition } from "react-transition-group"
import styled from "styled-components"
import { Icon } from "../../components/icons"

const StyledProjectsSection = styled.section`
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

const StyledProject = styled.div`
  color: black;

  margin-bottom: 10px;

  .project-inner {
    box-shadow: 0px 7px 6.58px 0.42px rgba(18, 18, 18, 0.27);
    border-radius: 10px;
    width: 280px;
    padding: 30px;
    height: 280px;
  }

  .top {
    margin-bottom: 35px;
    ${({ theme }) => theme.mixins.flexBetween};
  }

  .links {
    display: flex;
    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 5px 7px;

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .title {
    font-weight: 700;
  }

  .description {
    opacity: 0.9;
  }

  .tech {
    display: flex;

    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
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
            }
            html
          }
        }
      }
    }
  `)

  const projectsData = data.projects.edges
  const [activeTabId, setActiveTabId] = useState(0)

  return (
    <StyledProjectsSection id="projects">
      <div className="inner">
        <Column>
          <div>
            {projectsData.map(({ node }, i) => {
              const { frontmatter, html } = node
              const { title, github, external, tech } = frontmatter

              return (
                <StyledProject>
                  <div className="project-inner">
                    <div className="top">
                      <div>logo</div>
                      <div className="links">
                        {github && (
                          <a href={github} aria-label="GitHub Link">
                            <Icon name="GitHub" />
                          </a>
                        )}
                        {external && (
                          <a
                            href={external}
                            aria-label="External Link"
                            className="external"
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
        </Column>

        <Column></Column>
      </div>
    </StyledProjectsSection>
  )
}

export default Projects
