// - IMPORTS -
import React from "react";
import "./index.css";
import App from "./components/App/App";
// * React component DOM routing
import ReactDOM from "react-dom/client";
// * Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// - REDUCERS -
// * Feedback reducer
export const feedback = (
  // Parameters
  // State starting as object with properties that have no values
  state = {},
  action
) => {
  // Conditionals for actions
  if (action.type === "ADD_FEELING") {
    // Creating new 'feeling' property with payload as value
    state.feeling = action.payload;
    return state;
  } else if (action.type === "ADD_UNDERSTANDING") {
    // Creating new 'understanding' property with payload as value
    state.understanding = action.payload;
    return state;
  } else if (action.type === "ADD_SUPPORT") {
    // Creating new 'support' property with payload as value
    state.support = action.payload;
    return state;
  } else if (action.type === "ADD_COMMENT") {
    // Creating new 'support' property with payload as value
    state.comments = action.payload;
    return state;
  }

  return state;
}; // * end feedback
// Final feedback state will look like: {feedback: "", understanding: "", support: "", comments: ""}

// - REDUX STORE -
const store = createStore(
  combineReducers({
    feedback,
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
