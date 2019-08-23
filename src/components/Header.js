import React from "react"
import Menu from "./Menu"
import Logo from "./Logo"
import useSiteMetadata from "../hooks/use-site-metadata"

const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <header
      id="site-header"
      className="mb-8 w-full clearfix bg-gray-900"
      role="banner"
    >

              <div className="site-logo"><Logo data={title} /></div>


            {/* <div>
                      <input className="rounded-lg bg-gray-200 p-4 h-8" type="text" />
                    </div> */}
            
              <div className="mainmenu"><Menu /><span style={{color:'#fff'}}>MENU</span></div>

    </header>
    
  )
}

export default Header
