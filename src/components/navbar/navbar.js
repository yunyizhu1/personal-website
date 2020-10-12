import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LinkedInIcon } from './icons/linkedin.svg';
import { ReactComponent as GoogleScholarIcon } from './icons/googlescholar.svg';

const Navbar = ( {scrollFunction} ) => {
  return (
    <nav>
      <div className="navigation">
        <Link to="/" className="name-brand">Yunyi Zhu</Link>
        <div className="menu">
          <button onClick={() => scrollFunction("research")}>Publications</button>
          <button onClick={() => scrollFunction("awards")}>Awards</button>
        </div>
      </div>
      <div className="info">
        <div className="googlescholar">
          <a href="https://www.linkedin.com/in/yunyizhu97/" target="_blank"><GoogleScholarIcon /></a>
        </div>
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/yunyizhu97/" target="_blank"><LinkedInIcon /></a>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;