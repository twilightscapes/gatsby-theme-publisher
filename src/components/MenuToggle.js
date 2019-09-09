import React from 'react';

const MenuToggle = ({ onClick }) => (
  <button
  	name="Menu"
    className="menu-toggle"
    aria-controls="top-menu"
    aria-expanded="false"
    onClick={onClick}
  >

    <span className="screen-reader-text">Menu</span>
  </button>
  
);

export default MenuToggle;
