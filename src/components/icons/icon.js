import React from "react"

import { IconGitHub, IconLinkedin, IconExternal,IconLogo } from "../icons"

const Icon = ({ name }) => {
  switch (name) {
    case "GitHub":
      return <IconGitHub />

    case "Linkedin":
      return <IconLinkedin />

    case "External":
      return <IconExternal />
    case "Logo":
      return <IconLogo/>

    default:
      return null
  }
}

export default Icon
