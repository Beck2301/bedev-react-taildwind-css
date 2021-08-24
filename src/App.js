import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Bedev from './components/pages/Bedev';
import Navbar from './components/Navbar'
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Site1 from './components/Site1';
import Site2 from './components/Site2';
import Site4 from './components/Site4';
import Site5 from './components/Site5';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Bedev}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/projects'component={Projects}></Route>
          <Route path='/wlh' component={Site1}></Route>
          <Route path='/covid19sv' component={Site2}/>
          <Route path='/marktech' component={Site4}></Route>
          <Route path='/on-the-rocks' component={Site5}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
