import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import PropTypes from 'prop-types';
// import "../css/tailwind-customizations.css"
import "../css/index.scss"


const Layout = ({ children }) => (
  <section id="root">
    <Header />
    <main id="section-main">{children}</main>
    <Sidebar />
    <Footer />
  </section>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;



// -> document.body.className === "helloworld"

