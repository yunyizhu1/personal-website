import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div className="navigation">
      <Link to="/" className="name-brand">Yunyi Zhu</Link>
      <div className="menu">
        <Link to="/research">Research</Link>

      </div>
    </div>
    <div className="info">
      <Link to="/">Resume</Link>
    </div>
  </nav>
);

export default Navbar;