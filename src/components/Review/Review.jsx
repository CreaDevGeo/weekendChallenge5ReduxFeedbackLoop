// - IMPORTS -
// axios for POST request
import axios from "axios";
// 'feedback' redux store state import
import { useSelector, useDispatch } from "react-redux";
// Send user to 'Thank You' client route page
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// - REVIEW COMPONENT -
export default function Review() {
  // * Declaring useDispatch as variable
  const dispatch = useDispatch();

  // * Declaring feedback redux state
  const feedback = useSelector((store) => store.feedback);

  // * Declaring useHistory as a variable
  const history = useHistory();

  // * Function to POST feedback to database
  const handleSubmitFeedback = () => {
    console.log("\nSubmit button clicked");

    // axios post request
    axios
      .post("/feedback", feedback)
      .then((response) => {
        console.log(
          "POST request to url '/feedback' sent! Response is:",
          response
        );

        // Dispatch action to clear feedback redux state
        dispatch({
          type: "EMPTY_FEEDBACK",
        });
      })
      .catch((error) => {
        console.log("Error sending feedback! Error is:", error);
        alert("Oh no, there was an issue sending the feedback!");
      });

    // Send user to 'Thank You' client route
    history.push("/thankYou");
  }; // * end handleSubmitFeedback

  // - RENDERING -
  return (
    <section>
      <h2>Review Your Feedback</h2>

      {/* feedback object creating a list element per property */}
      <ul>
        <li>Feedback: {feedback.feeling}</li>
        <li>Understanding: {feedback.understanding}</li>
        <li>Support: {feedback.support}</li>
        <li>Comments: {feedback.comments}</li>
      </ul>

      <button onClick={handleSubmitFeedback}>SUBMIT</button>
    </section>
  );
}
