import React from "react"
import Menu from "./Menu"
import Logo from "./Logo"
import useSiteMetadata from "../hooks/use-site-metadata"
import Headroom from "react-headroom"
import { FaArrowAltCircleUp } from 'react-icons/fa';
import ThemeSwitcher from "react-theme-switcher";

const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <header
      id="site-header"
      className="mb-8 w-full clearfix bg-gray-900"
      role="banner"
    ><Headroom>

              <div className="site-logo"><Logo data={title} /></div>


            {/* <div>
                      <input className="rounded-lg bg-gray-200 p-4 h-8" type="text" />
                    </div> */}
            
              <div className="mainmenu"><Menu /><span style={{color:'#fff'}}>MENU</span></div>
<a title="Back To Top" href="#site-header" className="back-to-top fa-chevron-circle-up fa-4x shadow"><FaArrowAltCircleUp /> Back to Top</a>
    <div className="themer"><span>Theme:</span><ThemeSwitcher
	cssSelector="body"
	switcherColor="#fe09f0"
	darkColor="#282c34"
	lightColor="#ffffff"
	lightTextColor="#272b33"
	darkTextColor="#ffffff"
/></div></Headroom></header>
    
  )
}

export default Header
