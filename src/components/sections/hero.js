import React from "react"

import styled from "styled-components"

const StyledHeroSection = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  min-height: 100vh;
  color: white;
  mix-blend-mode: difference;

  h1 {
    font-size: 22px;
    margin-right: 600px;
    font-weight: 100;
  }

  h2 {
    margin: 0 100px 0 0;
    font-size: 112px;
    font-family: var(--font-playfair);
  }

  h3 {
    margin: 0 700px 0 0;
    font-weight: 300;
    font-size: 26px;
  }

  h4 {
    margin: 0 0 0 300px;
    font-size: 24px;
  }

  h5 {
    margin: 0 200px 0 0;
    font-size: 22px;
  }

  h6 {
    margin: 0 0 0 200px;
    font-size: 20px;
  }
`

const Hero = () => {
  const one = <h1>Hello, my name is</h1>
  const two = <h2>Edwin Luo.</h2>
  const three = <h3>I am a software engineer.</h3>
  const four = <h4>Always working.</h4>
  const five = <h5>Eager to learn.</h5>
  const six = <h6>Ready to create.</h6>

  const items = [one, two, three, four, five, six]

  return (
    <StyledHeroSection>
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </StyledHeroSection>
  )
}

export default Hero
