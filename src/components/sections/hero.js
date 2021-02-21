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
    margin: 32px 600px 0 0;
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

  // keyframes

  @keyframes fadeOutLeft {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(-100px, 0, 0);
      transform: translate3d(-100px, 0, 0);
    }
  }

  @-webkit-keyframes fadeOutLeft {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(-100px, 0, 0);
      transform: translate3d(-100px, 0, 0);
    }
  }

  .animate__fadeOutLeft {
    -webkit-animation-name: fadeOutLeft;
    animation-name: fadeOutLeft;
  }

  @keyframes fadeOutRight {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(100px, 0, 0);
      transform: translate3d(100px, 0, 0);
    }
  }

  @-webkit-keyframes fadeOutRight {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(100px, 0, 0);
      transform: translate3d(100px, 0, 0);
    }
  }

  .animate__fadeOutRight {
    -webkit-animation-name: fadeOutRight;
    animation-name: fadeOutRight;
  }

  @keyframes fadeInLeft {
    from {
      -webkit-transform: translate3d(-100px, 0, 0);
      transform: translate3d(-100px, 0, 0);
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes @keyframes fadeInLeft {
    from {
      -webkit-transform: translate3d(-100px, 0, 0);
      transform: translate3d(-100px, 0, 0);
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  .animate__fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
  }

  @keyframes fadeInRight {
    from {
      -webkit-transform: translate3d(100px, 0, 0);
      transform: translate3d(100px, 0, 0);
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes @keyframes fadeInRight {
    from {
      -webkit-transform: translate3d(100px, 0, 0);
      transform: translate3d(100px, 0, 0);
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  .animate__fadeInRight {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
  }
`

const animate = (direction, children) => {
  let res

  if (direction == "left") {
    res = (
      <ScrollAnimation
        animateIn="animate__fadeInLeft"
        animateOut="animate__fadeOutLeft"
        offset={200}
      >
        {children}
      </ScrollAnimation>
    )
  } else {
    res = (
      <ScrollAnimation
        animateIn="animate__fadeInRight"
        animateOut="animate__fadeOutRight"
        offset={200}
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
        {animate("right", <h4>I am a software engineer.</h4>)}
        {animate("left", <h5>I am a software engineer.</h5>)}
        {animate("right", <h6>I am a software engineer.</h6>)}

        {/* {items.map((item, i) => (
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
          >
            <div key={i}>{item}</div>
          </ScrollAnimation>
        ))} */}
      </div>
    </StyledHeroSection>
  )
}

export default Hero
