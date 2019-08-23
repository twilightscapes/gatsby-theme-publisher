import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';
// import "../css/tailwind-customizations.css"
import "../css/index.scss"

const Layout = ({ children }) => (

    <Header />
   <section id="section-main">
  <div className="site-content max-w-6xl m-auto p-8 pt-2">{children}</div>
  </section>
    <Footer />

);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
