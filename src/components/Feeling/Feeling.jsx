// - IMPORTS -
// Redux dispatch
import { useDispatch } from "react-redux";
// Hook for setting local state
import { useState } from "react";
// useHistory to take user to next client route
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// Feedback state for testing and errorPrompt state for authentication
import { useSelector } from "react-redux";

// - FEELING COMPONENT -
export default function Feeling() {
  // * State hook for input
  const [feelingInput, setFeelingInput] = useState("");
  // * State hook for errorPrompt
  const [errorPrompt, setErrorPrompt] = useState("");

  // * Declaring useDispatch as variable
  const dispatch = useDispatch();

  // * Declaring feedback state
  const feedback = useSelector((store) => store.feedback);

  // * Declaring useHistory as a variable
  const history = useHistory();

  // * Function to authenticate input fields
  const authenticator = (numberInputValue) => {
    // Conditionals for authentication
    // If numberInput is empty, > 10, or NaN
    if (
      numberInputValue === "" ||
      numberInputValue > 10 ||
      Number.isNaN(numberInputValue)
    ) {
      console.log("\tUser must enter enter a number from 1 to 10.");

      setErrorPrompt("Please enter a number from 1 to 10.");
      return false;
    } // end conditional

    setErrorPrompt("");
    return true;
  }; // * end authenticator

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
    setFeelingInput(Number(event.target.value));
  }; // * end handleStoringFeelingInput

  // * Function to handle next button click
  const handleNextButton = (event) => {
    console.log("\nNext button clicked!");

    // Authenticator function
    const isValid = authenticator(feelingInput);

    // If the authenticator function returns false, exit the handleNextButton function
    if (!isValid) {
      return;
    }

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

      <p>{errorPrompt}</p>
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
