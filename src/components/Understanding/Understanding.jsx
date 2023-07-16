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
export default function Understanding() {
  // * State hook for input
  const [understandingInput, setUnderstandingInput] = useState("");

  // * Declaring useDispatch as variable
  const dispatch = useDispatch();

  // * Declaring feedback redux state
  const feedback = useSelector((store) => store.feedback);

  // * Declaring useHistory as a variable
  const history = useHistory();

  // * Function to clear input fields
  const clearInputFields = () => {
    setUnderstandingInput("");
  }; // end clearInputFields

  // * Function to move to client route, 'Support'
  const toSupportRoute = () => {
    history.push("/support");
  }; // * end toSupportRoute

  // * Function to set local state input value
  const handleStoringUnderstandingInput = (event) => {
    setUnderstandingInput(event.target.value);
  }; // * end handleStoringUnderstandingInput

  // * Function to handle next button click
  const handleNextButton = (event) => {
    console.log("\nNext button clicked!");

    // Logging
    console.log("understandingInput is:", understandingInput);

    // Dispatch an action
    dispatch({
      type: "ADD_UNDERSTANDING",
      payload: understandingInput,
    }); // end dispatch

    // Feedback redux state testing
    console.log("'feedback' redux state is:", feedback);

    // Clear input fields by clearing state
    clearInputFields();

    // Take user to 'Support' client route
    toSupportRoute();
  }; // * end handleNextButton

  return (
    <div>
      <h2>How well are you understanding the content?</h2>

      <form>
        <fieldset>
          <label>Understanding?</label>
          <input
            onChange={handleStoringUnderstandingInput}
            type="number"
            placeholder="1-10"
            value={understandingInput}
          />
        </fieldset>
      </form>
      <button onClick={handleNextButton}>NEXT</button>
    </div>
  );
}
