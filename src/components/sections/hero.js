import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import styled from "styled-components"

const StyledHeroSection = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};

  min-height: 100vh;
  text-align: center;

  h1 {
    font-size: 22px;
    margin-right: 600px;
    font-weight: 300;
    letter-spacing: 0.05em;
    opacity: 0.8;
  }

  h2 {
    margin: 0 100px 0 0;
    font-size: 112px;
    display: flex;
    justify-content: center;
    font-family: var(--font-playfair);
  }

  .special {
    color: white;
    margin-left: 24px;
  }

  h3 {
    margin: 32px 500px 0 0;
    font-size: 26px;
    opacity: 0.5;
    letter-spacing: 0.05em;
  }

  h4 {
    margin: 24px 0 0 300px;
    font-size: 24px;
    font-weight: 300;
    opacity: 0.5;
    color: white;
  }

  h5 {
    margin: 24px 300px 0 0;
    font-size: 22px;
    opacity: 0.4;
  }

  h6 {
    margin: 34px 0 0 400px;
    font-size: 20px;
    color: white;
    opacity: 0.4;
  }

  @media (max-width: 768px) {
    color: white;

    h1 {
      font-size: 12px;
      margin-right: 200px;
    }

    h2 {
      font-size: 48px;
      margin: 0;
    }

    .special {
      margin: 0 0 0 16px;
    }

    h3 {
      margin: 24px 150px 0 0;
      font-size: 16px;
    }

    h4 {
      margin: 24px 0 0 150px;
      font-size: 14px;
    }

    h5 {
      margin: 16px 100px 0 0;
      font-size: 12px;
    }

    h6 {
      margin: 24px 0 0 100px;
      font-size: 12px;
    }
  }
`

const animate = (direction, children) => {
  let res

  if (direction === "left") {
    res = (
      <ScrollAnimation
        animateIn="animate__fadeInLeft"
        animateOut="animate__fadeOutLeft"
        offset={150}
      >
        {children}
      </ScrollAnimation>
    )
  } else {
    res = (
      <ScrollAnimation
        animateIn="animate__fadeInRight"
        animateOut="animate__fadeOutRight"
        offset={150}
      >
        {children}
      </ScrollAnimation>
    )
  }

  return res
}

const Hero = () => {
  return (
    <StyledHeroSection id="hero">
      <div>
        {animate("left", <h1>Hello, my name is</h1>)}
        <h2>
          {animate("left", <span>Edwin</span>)}
          {animate("right", <span className="special">Luo.</span>)}
        </h2>

        {animate("left", <h3>I am a software engineer.</h3>)}
        {animate("right", <h4>Future Hedgewin CTO.</h4>)}
        {animate("left", <h5>I'll quadruple your money!</h5>)}
        {animate("right", <h6>Feel free to invest.</h6>)}
      </div>
    </StyledHeroSection>
  )
}

export default Hero
