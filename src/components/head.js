import React from "react"
import { Helmet } from "react-helmet"

const Head = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Edwin Luo</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:ital,wght@1,300&family=Lato:wght@100;300;400;700&display=swap"
        rel="stylesheet"
      />

      {/* <link rel="canonical" href="http://mysite.com/example" /> */}
    </Helmet>
  )
}

export default Head
