// - IMPORTS -
import React from "react";
import "./App.css";
// * Axios for server requests
import axios from "axios";
// * React router DOM
import { HashRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// * Redux store state selector
import { useSelector } from "react-redux/es/hooks/useSelector.js";
// * Components
import Home from "../Home/Home.jsx";
import Feeling from "../Feeling/Feeling.jsx";
import Understanding from "../Understanding/Understanding.jsx";
import Support from "../Support/Support.jsx";
import Comments from "../Comments/Comments.jsx";
import Review from "../Review/Review.jsx";
import ThankYou from "../ThankYou/ThankYou.jsx";


function App() {
  const feedback = useSelector((store) => store.feedback);
  console.log("feedback state is:", feedback);

  // - RENDERING -
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <h1 className="App-title">Feedback!</h1>
          </Link>
        </header>

        {/* Home Component; First/Home Page */}
        <Route exact path="/">
          <Home />
        </Route>

        {/* Feeling Component; Second Page */}
        <Route exact path="/feeling">
          <Feeling />
        </Route>

        {/* Understanding Component; Third Page */}
        <Route exact path="/understanding">
          <Understanding />
        </Route>

        {/* Support Component; Fourth Page */}
        <Route exact path="/support">
          <Support />
        </Route>

        {/* Comments Component; Fifth Page */}
        <Route exact path="/comments">
          <Comments />
        </Route>

        {/* Review Component; Sixth Page */}
        <Route exact path="/review">
          <Review />
        </Route>

        {/* ThankYou Component; Seventh Page */}
        <Route exact path="/thankYou">
          <ThankYou />
        </Route>
      </div>
    </Router>
  );
}

export default App;
