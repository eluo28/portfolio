import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
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
    letter-spacing: 0.05em;
  }

  h2 {
    margin: 0 100px 0 0;
    font-size: 112px;
    font-family: var(--font-playfair);
  }

  h3 {
    margin: 0 700px 0 0;
    font-size: 26px;
    opacity: 0.5;
    letter-spacing: 0.05em;
  }

  h4 {
    margin: 24px 0 0 300px;
    font-size: 24px;
    font-weight: 300;
    opacity: 0.5;
  }

  h5 {
    margin: 24px 200px 0 0;

    font-size: 22px;
    opacity: 0.4;
  }

  h6 {
    margin: 34px 0 0 200px;
    font-size: 20px;

    opacity: 0.4;
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
      left: 0px;
    }

    100% {
      opacity: 0;
      left: 150px;
    }
  }

  @-webkit-keyframes fadeOut {
    0% {
      opacity: 1;
      left: 0px;
    }

    100% {
      opacity: 0;
      left: 150px;
    }
  }

  .animate__fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;

    // mix-blend-mode: difference;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  .animate__fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }
`

const Hero = () => {
  const one = <h1>Hello, my name is</h1>
  const two = <h2>Edwin Luo.</h2>
  const three = <h3>I am a software engineer.</h3>
  const four = <h4>I am a software engineer.</h4>
  const five = <h5>I am a software engineer.</h5>
  const six = <h6>I am a software engineer.</h6>

  const items = [one, two, three, four, five, six]

  return (
    <StyledHeroSection id="hero">
      {items.map((item, i) => (
        // <ScrollAnimation
        //   animateIn="animate__fadeIn"
        //   animateOut="animate__fadeOut"
        //   offset={200}
        // >
        <div key={i}>{item}</div>
        // {/* </ScrollAnimation> */}
      ))}
    </StyledHeroSection>
  )
}

export default Hero
