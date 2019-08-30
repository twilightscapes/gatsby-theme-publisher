import React from "react"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = () => {
  const { author } = useSiteMetadata()
  return (
    <footer id="section-footer" className="site-footer">
     Copyright ®2019 Urban Fetish
    </footer>
  )
}

export default Footer
