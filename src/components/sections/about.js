import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const StyledAboutSection = styled.section`
  ${({ theme }) => theme.mixins.flexBetween};
  width: 100%;
  max-width: 900px;

  // background-color: red;

  h2 {
    font-family: var(--font-playfair);
    font-size: 32px;
  }
`

const Column = styled.div`
  flex: 50%;
`

const LeftCol = styled.div`
  text-align: right;
  margin-right: 64px;
  width: 380px;
  // background-color: blue;
`

const RightCol = styled.div`
  margin-left: 64px;
  position: relative;

  .white_outline {
    border-width: 4px;
    border-color: white;
    border-style: solid;
    width: 200px;
    height: 320px;
    margin-left: 100px;
  }

  .white_rec {
    position: absolute;
    left: 64px;
    top: -80px;
    width: 200px;
    height: 320px;
    background: white;
  }

  .img {
    position: absolute;
    left: 0;
    top: -32px;
  }
`

// const Skills = styled.div`
//   margin-bottom: 100px;
//   display: flex;
//   justify-content: center;
//   span {
//     display: inline-block;
//     color: white;
//     mix-blend-mode: difference;
//     margin: 0 20px;
//   }
// `

const About = () => {
  // const skills = [
  //   "Java",
  //   "Python",
  //   "React",
  //   "Javascript",
  //   "C",
  //   "C++",
  //   "Go",
  //   "HTML",
  //   "CSS",
  //   "SQL",
  // ]

  const data = useStaticQuery(graphql`
    query {
      avatar: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "me.jpg" }
      ) {
        childImageSharp {
          fixed(width: 200, height: 320) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <StyledAboutSection id="about">
        <Column>
          <LeftCol>
            <h2>About Me</h2>

            <div>
              <p>
                Hello! I'm Edwin, a computer science student at the Rutgers
                Honors College in New Brunswick, NJ.
              </p>
              <p>
                I enjoy creating products and experiences that impact. Learning
                new technologies and applying them to achieve this goal is
                something I love to do.
              </p>
              I'm always looking for opportunities to grow as a software
              engineer and hope to one day affect billions of lives around the
              world with my work.
              <p></p>
            </div>
          </LeftCol>
        </Column>
        <Column>
          <RightCol>
            <div className="white_outline"></div>
            <div className="white_rec"></div>
            <div className="img">
              <Img fixed={data.avatar.childImageSharp.fixed} alt="Avatar" />
            </div>
          </RightCol>
        </Column>
      </StyledAboutSection>
      {/* <Skills>
        {skills.map((skill, i) => (
          <>
            <span>{skill}</span>
            {i != skills.length - 1 ? <span>-</span> : null}
          </>
        ))}
      </Skills> */}
    </>
  )
}

export default About
