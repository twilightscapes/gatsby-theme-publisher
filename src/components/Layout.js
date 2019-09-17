import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import PropTypes from 'prop-types';
import "../css/index.scss";
import 'typeface-lato';



if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => (
	
<>
    <Header />
    

    
    <div id="content-layout">
    <main id="section-main">{children}</main>
    <Sidebar />
    </div>
    
    <Footer />
    
    
  
    
</>

  
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;


