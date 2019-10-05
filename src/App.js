import React from 'react';
import Navbar from './navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Research from './research';
import Art from './art';
import './styles/styles.scss';


function App() {
  return (
    <Router>
      <div className="page-container">
        <header>
          <Navbar />
        </header>
        <Route exact path="/research" component={ Research } />
        <Route exact path="/art" component={ Art } />
      </div>
    </Router>
  );
}

export default App;
