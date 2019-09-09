import React from 'react';

const HeaderArchive = ({ name }) => (
  <header className="page-header page-header__archive container bottom-spacer">
    <h1 className="archive-title text-sm uppercase font-light border-b mb-4 pb-2 text-gray-500 leading-tight">
      {name}
    </h1>
  </header>
);

export default HeaderArchive;
