// IMPORTS
import React from 'react';
import './App.css';
// Axios for server requests
import axios from 'axios';
// React router DOM
import { HashRouter as Router, Route } from "react-router-dom";
// Redux store state selector
import { useSelector } from 'react-redux/es/hooks/useSelector.js';
// Components
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';

function App() {

  const feedback = useSelector(store => store.feedback);
  console.log("feedback state is:", feedback);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        {/* Feeling Component; First/Home Page */}
        <Route exact path="/">
          <Feeling />
        </Route>

        {/* Understanding Component; Second Page */}
        <Route exact path="/understanding">
          <Understanding />
        </Route>

        {/* Support Component; Third Page */}
        <Route exact path="/support">
          <Support />
        </Route>

      </div>
    </Router>
  );
}

export default App;
