// - IMPORTS -
// Redux dispatch
import { useDispatch } from "react-redux";
// Hook for setting local state
import { useState } from "react";
// useHistory to take user to next client route
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// Feedback state for testing
import { useSelector } from "react-redux";

// - FEELING COMPONENT -
export default function Support() {
  // * State hook for input
  const [supportInput, setSupportInput] = useState("");

  // * Declaring useDispatch as variable
  const dispatch = useDispatch();

  // * Declaring feedback redux state
  const feedback = useSelector((store) => store.feedback);

  // * Declaring useHistory as a variable
  const history = useHistory();

  // * Function to clear input fields
  const clearInputFields = () => {
    setSupportInput("");
  }; // end clearInputFields

  // * Function to move to client route, 'Comments'
  const toCommentsRoute = () => {
    history.push("/comments");
  }; // * end toCommentsRoute

  // * Function to set local state input value
  const handleStoringSupportInput = (event) => {
    setSupportInput(event.target.value);
  }; // * end handleStoringSupportInput

  // * Function to handle next button click
  const handleNextButton = (event) => {
    console.log("\nNext button clicked!");

    // Logging
    console.log("supportInput is:", supportInput);

    // Dispatch an action
    dispatch({
      type: "ADD_SUPPORT",
      payload: supportInput,
    }); // end dispatch

    // Feedback redux state testing
    console.log("'feedback' redux state is:", feedback);

    // Clear input fields by clearing state
    clearInputFields();

    // Take user to 'Support' client route
    toCommentsRoute();
  }; // * end handleNextButton

  return (
    <div>
      <h2>How well are you being supported?</h2>

      <form>
        <fieldset>
          <label>Support?</label>
          <input
            onChange={handleStoringSupportInput}
            type="number"
            placeholder="1-10"
            value={supportInput}
          />
        </fieldset>
      </form>
      <button onClick={handleNextButton}>NEXT</button>
    </div>
  );
}
