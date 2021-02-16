import React from "react"

import { IconGitHub, IconLinkedin } from "../icons"

const Icon = ({ name }) => {
  switch (name) {
    case "GitHub":
      return <IconGitHub />

    case "Linkedin":
      return <IconLinkedin />

    default:
      return null
  }
}

export default Icon
