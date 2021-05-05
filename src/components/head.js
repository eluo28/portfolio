import React from "react"
import { Helmet } from "react-helmet"
import { logo } from "../images/logo.svg"
import ogImage from "../images/ogimg.jpg"

const Head = () => {
  return (
    <Helmet
      title="Edwin Luo"
      meta={[
        {
          property: `og:title`,
          content: "Edwin Luo",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `https://www.edwinluo.com/${ogImage}`,
        },
      ]}
    >
      <meta charSet="utf-8" />
      <title>Edwin Luo</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="icon" href={logo} />

      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:ital,wght@1,300;1,500&family=Lato:wght@100;300;400;700&display=swap"
        rel="stylesheet"
      />

    </Helmet>
  )
}

export default Head
