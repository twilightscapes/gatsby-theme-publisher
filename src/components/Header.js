import React from "react"
import Menu from "./Menu"
import Logo from "./Logo"
import useSiteMetadata from "../hooks/use-site-metadata"
import Headroom from "react-headroom"
// import { FaArrowAltCircleUp } from 'react-icons/fa';
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Image from './Image';

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
<a title="Back To Top" href="#site-header" className="back-to-top fa-chevron-circle-up fa-4x shadow"><Image filename="up-arrow.png" alt="up-arrow" width="30" height="30" /></a>
    <div className="themer"><span>Theme:</span> <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div className="themeSlide">
            <input
              type="checkbox" value="None" id="themeSlide" name="check"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            
          <label htmlFor="themeSlide"></label></div>
        )}
      </ThemeToggler></div></Headroom></header>
    
  )
}



export default Header
