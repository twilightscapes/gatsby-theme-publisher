import React from 'react';

const MenuToggle = ({ onClick }) => (
  <button
  	id="Menu"
    className="menu-toggle"
    aria-controls="top-menu"
    aria-expanded="false"
    onClick={onClick}
  >

    <span id="Site Menu" className="screen-reader-text">Menu</span>
  </button>
  
);

export default MenuToggle;
