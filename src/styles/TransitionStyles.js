import { css } from "styled-components"

// https://reactcommunity.org/react-transition-group/css-transition

const TransitionStyles = css`
  /* Fade up */
  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  /* Fade down */
  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  /* Fade */
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms var(--easing);
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms var(--easing);
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

export default TransitionStyles
