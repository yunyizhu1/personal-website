import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ( {scrollFunction} ) => {
  return (
    <nav>
      <div className="navigation">
        <Link to="/" className="name-brand">Yunyi Zhu</Link>
        <div className="menu">
          <button onClick={() => scrollFunction("awards")}>Research</button>
        </div>
      </div>
      <div className="info">
        <Link to="/">Resume</Link>
      </div>
    </nav>
  );
}


export default Navbar;