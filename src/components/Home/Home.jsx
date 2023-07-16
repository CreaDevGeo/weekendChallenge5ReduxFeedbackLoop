// - IMPORTS -
// Sending user to '/feeling' client route
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


// - FEELING COMPONENT -
export default function Home() {
  // * Declaring useHistory as a variable
  const history = useHistory();

  // * Function to move to client route, 'Feeling'
  const toFeelingRoute = () => {
    history.push("/feeling");
  }; // * end toFeelingRoute

  // * Function to handle begin button click
  const handleBeginButton = () => {
    console.log("\nBegin button clicked, beginning form!");

    // Take user to 'Feeling' client route
    toFeelingRoute();
  };

  // - RENDERING -
  return (
    <div>
      <h1>Hello Software Developer</h1>
      <p>Give us feedback with this form!</p>
      <button onClick={handleBeginButton}>Begin</button>
    </div>
  );
} // * end Home