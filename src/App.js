// @flow

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';

// Google fonts typeface
import 'typeface-mali';
import 'typeface-pacifico';

// Testing
// import CheckboxWithLabel from './components/CheckboxWithLabel';

export default () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={() => <About />} />
        <Route path="/news" render={() => <News />} />
        {/* Non matching URLs end up here, could be a 404 page */}
        <Route component={Home} />
      </Switch>
    </div>
  </Router>
);
