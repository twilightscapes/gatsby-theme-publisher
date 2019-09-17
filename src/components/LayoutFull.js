import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';
import "../css/index.scss";




if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const LayoutFull = ({ children }) => (
	
<>
    <Header />
    

    
    <div id="content-layout-full">
    <main id="section-main">{children}</main>
    </div>
    <Footer />
   
  
    
</>
  
);



LayoutFull.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutFull;
