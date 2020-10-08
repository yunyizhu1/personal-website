import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/styles.scss';
import Navbar from './components/navbar/navbar';
import Research from './components/research/research';
import About from './components/about/about';
import Awards from './components/awards/awards';
import Footer from './components/navbar/footer';

function App() {
  return (
    <Router>
      <div className="page-container">
          <Navbar />
          <div className="body-part">
            <About />
            <Research />
            <Awards />
          </div>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
