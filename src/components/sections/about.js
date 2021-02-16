import React from "react"
import styled from "styled-components"

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
  margin-right: 40px;
`

const RightCol = styled.div`
  display: flex;
  color: white;
  justify-content: center;
`

const Skills = styled.div`
  background-color: red;
`

const About = () => {
  // const skills = [
  //   "JavaScript (ES6+)",
  //   "HTML & (S)CSS",
  //   "React",
  //   "Vue",
  //   "Node.js",
  //   "WordPress",
  // ]

  return (
    <>
      <StyledAboutSection>
        <Column>
          <LeftCol>
            <h2>About Me</h2>

            <div>
              <p>
                Hello! I'm Brittany, a software engineer based in Boston, MA.
              </p>

              <p>
                I enjoy creating things that live on the internet, whether that
                be websites, applications, or anything in between. My goal is to
                always build products that provide pixel-perfect, performant
                experiences.
              </p>

              <p>
                I enjoy creating things that live on the internet, whether that
                be websites, applications, or anything in between. My goal is to
                always build products that provide pixel-perfect, performant
                experiences.
              </p>
            </div>
          </LeftCol>
        </Column>
        <Column>
          <RightCol>Image</RightCol>
        </Column>
      </StyledAboutSection>
      <Skills>bruh</Skills>
    </>
  )
}

export default About
