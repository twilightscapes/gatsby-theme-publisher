import React from "react"
import Menu from "./Menu"
import Logo from "./Logo"
import useSiteMetadata from "../hooks/use-site-metadata"

const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <section id="section-header">
    <header
      id="masthead"
      className="site-header mb-8 w-full clearfix bg-gray-900"
      role="banner"
    >
     
              <Logo data={title} />


            {/* <div>
                      <input className="rounded-lg bg-gray-200 p-4 h-8" type="text" />
                    </div> */}
            <div>
              <Menu />
    </header>
    </section>
  )
}

export default Header
