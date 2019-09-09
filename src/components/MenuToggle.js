import React from 'react';

const MenuToggle = ({ onClick }) => (
  <button
  	id="text"
    className="menu-toggle"
    aria-controls="top-menu"
    aria-expanded="false"
    aria-label="Bold text icon"
    onClick={onClick}
  >

    <span id="Site Menu" className="screen-reader-text">Menu</span>
  </button>
  
);

export default MenuToggle;
