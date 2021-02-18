import { createGlobalStyle } from "styled-components"
import TransitionStyles from "./TransitionStyles.js"

const GlobalStyle = createGlobalStyle`

  :root{
    --font-lato: 'Lato', sans-serif;
    --font-playfair: 'Playfair Display', serif;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --tab-height: 42px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  html {
    box-sizing: border-box;
    width: 100%;
    
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    background: linear-gradient(90deg, #e7e7e7 50%, #121212 50%);
    font-family: var(--font-lato);
    overflow-x: hidden;
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }

    @media (max-width: 480px) {
      background: white;
    }


  }

 
  main {
    
    margin: 0 auto;
    
    max-width: 1600px;
    min-height: 100vh;

    padding: 0px 150px;
  
    @media (max-width: 1080px) {
      padding: 0px 100px;
    }
    @media (max-width: 768px) {
      padding: 0px 50px;
    }
    @media (max-width: 480px) {
      padding: 0px 25px;
    }
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;
    

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }



  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    
  }





  ${TransitionStyles};

`

export default GlobalStyle
