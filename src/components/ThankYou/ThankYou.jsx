// - IMPORTS -
// Sending user to '/' client route
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// - THANK YOU COMPONENT -
export default function ThankYou() {
  // * Declaring useHistory as a variable
  const history = useHistory();

  // * Function to move to client route, 'Home'
  const toHomeRoute = () => {
    history.push("/");
  }; // * end toHomeRoute

  // * Function to handle new feedback button click
  const handleNewFeedbackButton = () => {
    console.log("\nNew feedback button clicked, beginning new form.");

    // Take user to 'Home' client route
    toHomeRoute();
  }; // * end handleNewFeedbackButton

  // - RENDERING -
  return (
    <div>
      <h2>Thank You!</h2>
      <button onClick={handleNewFeedbackButton}>Begin New Feedback</button>
    </div>
  );
} // end ThankYou
