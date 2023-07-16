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

    // Authenticator function
    const isValid = authenticator(supportInput);

    // If the authenticator function returns false, exit the handleNextButton function
    if (!isValid) {
      return;
    }

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

      <p>{errorPrompt}</p>

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
