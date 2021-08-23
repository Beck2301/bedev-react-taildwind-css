import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Bedev from './components/pages/Bedev';
import Navbar from './components/Navbar'
import About from './components/pages/About';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Bedev}></Route>
          <Route path='/about' component={About}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
