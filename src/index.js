// - IMPORTS -
import React from "react";
import "./index.css";
import App from "./components/App/App";
// React component DOM routing
import ReactDOM from "react-dom/client";
// Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// - REDUCERS -
// Feedback reducer
export const feedback = (
  // Parameters
  // State starting as object with properties that have no values
  state = { feeling: "", understanding: "", support: "", comments: "" },
  action
) => {
  // Conditionals for actions
  return state;
};

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
