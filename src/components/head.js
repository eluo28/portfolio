import React from "react"
import { Helmet } from "react-helmet"
import { logo } from "../images/logo.svg"
import ogImage from "../images/ogimg.jpg"

const Head = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Edwin Luo</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="icon" href={logo} />

      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:ital,wght@1,300;1,500&family=Lato:wght@100;300;400;700&display=swap"
        rel="stylesheet"
      />

      <meta property="og:image" content={`edwinluo.com/${ogImage}`} />
      <meta property="og:title" content="Edwin Luo" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:width" content="50" />
    </Helmet>
  )
}

export default Head
