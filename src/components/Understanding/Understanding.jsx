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
      console.log("\tUser must enter a value into the field.");

      setErrorPrompt("Please enter a number from 1 to 10.");
      return false;
    } // end conditional

    setErrorPrompt("");
    return true;
  }; // * end authenticator

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
    setUnderstandingInput(Number(event.target.value));
  }; // * end handleStoringUnderstandingInput

  // * Function to handle next button click
  const handleNextButton = (event) => {
    console.log("\nNext button clicked!");

    // Authenticator function
    const isValid = authenticator(understandingInput);

    // If the authenticator function returns false, exit the handleNextButton function
    if (!isValid) {
      return;
    }

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

      <p>{errorPrompt}</p>

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
