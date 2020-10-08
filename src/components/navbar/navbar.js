import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Navbar = () => {

  return (
    <nav>
      <div className="navigation">
        <Link to="/" className="name-brand">Yunyi Zhu</Link>
        <div className="menu">
          <button >Research</button>
        </div>
      </div>
      <div className="info">
        <Link to="/">Resume</Link>
      </div>
    </nav>
  );
}


export default Navbar;