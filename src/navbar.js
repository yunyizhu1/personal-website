import React from 'react';
import { Link } from 'react-router-dom';

const NameBrand = () => (
  <div className="name-brand">Yunyi Zhu</div>
);

const Menu = () => (
  <div className="menu">
    <Link to="/">About</Link>
    <Link to="/research">Research</Link>
    <Link to="/art">Art</Link>
    <Link to="/">Resume</Link>
  </div>
);

const Navbar = () => (
  <nav>
    <NameBrand />
    <Menu />
  </nav>
);

export default Navbar;