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

function App() {

  const feedback = useSelector(store => store.feedback);
  console.log("feedback state is:", feedback);

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

      {/* Feeling Component; Home Page */}
      <Route exact path='/'>
      <Feeling />
      </Route>

      </div>
    </Router>
  );
}

export default App;
