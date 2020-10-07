import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/styles.scss';
import Navbar from './navbar/navbar';
import Research from './research/research';
import About from './about/about';
import Footer from './navbar/footer';


function App() {
  return (
    <Router>
      <div className="page-container">
          <Navbar />
          <div className="body-part">
            <About />
            <Research />
          </div>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
