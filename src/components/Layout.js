import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import PropTypes from 'prop-types';
import "../css/index.scss";
import PageTransition from 'gatsby-plugin-page-transitions';
import 'typeface-lato';



if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => (
	
<>
    <Header />
    
<PageTransition
	defaultStyle={{
      transition: 'top 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
      top: '100%',
      position: 'absolute',
      width: '100%',
    }}
    transitionStyles={{
      entering: { top: '0%' },
      entered: { top: '0%' },
      exiting: { bottom: '100%' },
    }}
    transitionTime={300}>
    
    <div id="content-layout">
    <main id="section-main">{children}</main>
    <Sidebar />
    </div>
    
    <Footer />
    
    </PageTransition>
  
    
</>

  
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;


