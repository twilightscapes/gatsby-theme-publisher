import React from 'react';
import Header from './Header';
// import LayoutFull from './LayoutFull';
// import Sidebar from './Sidebar';
import Footer from './Footer';
import PropTypes from 'prop-types';
// import "../css/tailwind-customizations.css"
import "../css/index.scss"

const LayoutFull = ({ children }) => (
  <section id="root">
    <Header />
    <main id="section-main" style={{width: '100%', padding:'0'}}>{children}</main>
    <Footer />
  </section>
);

LayoutFull.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutFull;
