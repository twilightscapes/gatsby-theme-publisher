import React from "react"
// import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = () => {
//   const { author } = useSiteMetadata()
  return (
    <footer id="section-footer" className="site-footer">
     <p>Copyright © {new Date().getFullYear()} Todd Lambert
     
     <br /> Built with
        {` `}
        <a href="#site-header">Gatsby</a>
      </p>

    
    </footer>
  )
}

export default Footer
