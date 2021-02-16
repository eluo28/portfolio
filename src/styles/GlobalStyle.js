import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

  :root{
    --font-roboto: 'Roboto', sans-serif;
    --font-playfair: 'Playfair Display', serif;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

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
    font-family: var(--font-roboto);
  }


  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
  
    &:hover {
      color: white;
    }
  }




`

export default GlobalStyle
