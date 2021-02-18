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
    font-weight: 300;
    font-size: 26px;
    opacity: 0.7;
    letter-spacing: 0.05em;
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

  @-webkit-keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  .animate__fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
  }

  /* Fading entrances  */
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
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
    <StyledHeroSection>
      {items.map((item, i) => (
        <ScrollAnimation
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          offset={200}
        >
          <div key={i}>{item}</div>
        </ScrollAnimation>
      ))}
    </StyledHeroSection>
  )
}

export default Hero
