import React from "react"

import { IconGitHub, IconLinkedin, IconExternal } from "../icons"

const Icon = ({ name }) => {
  switch (name) {
    case "GitHub":
      return <IconGitHub />

    case "Linkedin":
      return <IconLinkedin />

    case "External":
      return <IconExternal />

    default:
      return null
  }
}

export default Icon
