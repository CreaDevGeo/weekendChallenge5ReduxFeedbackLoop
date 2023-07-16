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
export default function Comments() {
  // * State hook for input
  const [commentsInput, setCommentsInput] = useState("");

  // * Declaring useDispatch as variable
  const dispatch = useDispatch();

  // * Declaring feedback redux state
  const feedback = useSelector((store) => store.feedback);

  // * Declaring useHistory as a variable
  const history = useHistory();

  // * Function to clear input fields
  const clearInputFields = () => {
    setCommentsInput("");
  }; // end clearInputFields

  // * Function to move to client route, 'Review'
  const toReviewRoute = () => {
    history.push("/review");
  }; // * end toReviewRoute

  // * Function to set local state input value
  const handleStoringCommentsInput = (event) => {
    setCommentsInput(event.target.value);
  }; // * end handleStoringCommentsInput

  // * Function to handle next button click
  const handleNextButton = (event) => {
    console.log("\nNext button clicked!");

    // Logging
    console.log("commentsInput is:", commentsInput);

    // Dispatch an action
    dispatch({
      type: "ADD_COMMENT",
      payload: commentsInput,
    }); // end dispatch

    // Feedback redux state testing
    console.log("'feedback' redux state is:", feedback);

    // Clear input fields by clearing state
    clearInputFields();

    // Take user to 'Support' client route
    toReviewRoute();
  }; // * end handleNextButton

  // - RENDERING -
  return (
    <div>
      <h2>Any comments you want to leave?</h2>

      <form>
        <fieldset>
          <label>Comments?</label>
          <input
            onChange={handleStoringCommentsInput}
            type="text"
            placeholder="Enter a comment"
            value={commentsInput}
          />
        </fieldset>
      </form>
      <button onClick={handleNextButton}>NEXT</button>
    </div>
  );
}
