import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const StyledAboutSection = styled.section`
  ${({ theme }) => theme.mixins.flexBetween};
  width: 100%;
  max-width: 900px;

  // background-color: red;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Column = styled.div`
  flex: 50%;
`

const LeftCol = styled.div`
  text-align: center;
  // background-color: red;
  margin-right: 64px;
  font-size: 16px;
  max-width: 380px;
  h2 {
    font-family: var(--font-playfair);
    font-size: 32px;
  }
  @media (max-width: 1080px) {
    margin-left: 64px;
    margin-right: 32px;
  }

  @media (max-width: 768px) {
    color: white;
    margin: 0 0 200px 0;
    text-align: left;

    // background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      text-align: left;
      position: relative;
      padding-left: 64px;
      width: 100%;
      font-size: 24px;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 100%;
        margin-top: 16px;
        opacity: 0.75;
        height: 1px;

        width: 240px;

        background-color: white;
      }
    }

    .desc {
      width: 70vw;
      margin-top: 32px;
      font-size: 14px;
    }
  }
`

const RightCol = styled.div`
  margin-left: 64px;
  position: relative;

  @media (max-width: 1080px) {
    margin: 0 32px;
  }

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

  @media (max-width: 768px) {
    .white_outline {
      margin-left: 40px;
    }

    .white_rec {
      top: -64px;
      left: 24px;
    }
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
          fixed(width: 200, height: 320, quality: 90) {
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

            <div className="desc">
              <p>Hi! I'm Edwin, a CS student @ Rutgers University.</p>
              <p>
                I enjoy creating products and experiences that impact, using
                programming as a means to an end.
              </p>
              <p>
                Outside of software engineering I have a variety of interests
                including cooking, eating, working out, learning guitar+singing,
                music, and soccer. :)
              </p>
              <p>
                One day I will become CTO of the Hedgewins - a company with
                friends that impact others in a positive way.
              </p>
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
