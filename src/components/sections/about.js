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

  return (
    <>
      <StyledAboutSection id="about">
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
