import React from 'react';
import { Link } from 'gatsby';
import siteLogo from 'https://urbanfetish.com/wp-content/uploads/sites/26/2019/05/cropped-urban-fetish-logo-pink-menu.png';

const Logo = ( { data } ) => {

  return (
    <Link to="/" className="h-10 overflow-hidden block" rel="home" itemProp="url">
      <img
        src={siteLogo}
        alt="Site Logo"
        width="150"
        height="150"
        className="h-full w-auto block"
        itemProp="logo"
      />
    </Link>
  );
  }

export default Logo;
