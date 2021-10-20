import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import link1 from './Pages/link1';
import link3 from './Pages/link3';
import link2 from './Pages/link2';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={link1} />
          <Route path='/link2' component={link2} />
          <Route path='/link3' component={link3} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

