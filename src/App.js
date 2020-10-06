import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/styles.scss';
import Navbar from './navbar/navbar';
import Research from './research/research';
import Art from './art/art';
import About from './about/about';
import Footer from './navbar/footer';


function App() {
  return (
    <Router>
      <div className="page-container">
        <header>
          <Navbar />
        </header>
        <body>
          <About />
          <Research />
        </body>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
