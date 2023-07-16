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
export default function Feeling() {
  // * State hook for input
  const [feelingInput, setFeelingInput] = useState("");

  // * Declaring useDispatch as variable
  const dispatch = useDispatch();

  // * Declaring feedback state
  const feedback = useSelector((store) => store.feedback);

  // * Declaring useHistory as a variable
  const history = useHistory();

  // * Function to clear input fields
  const clearInputFields = () => {
    setFeelingInput("");
  }; // end clearInputFields

  // * Function to move to client route, 'Understanding'
  const toUnderstandingRoute = () => {
    history.push("/understanding");
  }; // * end toUnderstandingRoute

  // * Function to set local state input value
  const handleStoringFeelingInput = (event) => {
    setFeelingInput(event.target.value);
  }; // * end handleStoringFeelingInput

  // * Function to handle next button click
  const handleNextButton = (event) => {
    console.log("\nNext button clicked!");

    // Logging
    console.log("feelingInput is:", feelingInput);

    // Dispatch an action
    dispatch({
      type: "ADD_FEELING",
      payload: feelingInput,
    }); // end dispatch

    // Feedback redux state testing
    console.log("'feedback' redux state is:", feedback);

    // Clear input fields by clearing state
    clearInputFields();

    // Take user to 'Understanding' client route
    toUnderstandingRoute();
  }; // * end handleNextButton

  return (
    <div>
      <h2>How are you feeling today?</h2>

      <form>
        <fieldset>
          <label>Feeling?</label>
          <input
            onChange={handleStoringFeelingInput}
            type="number"
            placeholder="1-10"
            value={feelingInput}
          />
        </fieldset>
      </form>
      <button onClick={handleNextButton}>NEXT</button>
    </div>
  );
}
