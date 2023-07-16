// - IMPORTS -
// 'feedback' redux store state import
import { useSelector } from "react-redux";

// - REVIEW COMPONENT -
export default function Review() {
  // * Declaring feedback redux state
  const feedback = useSelector((store) => store.feedback);
  console.log("feedback redux state is:", feedback);

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

      <>SUBMIT</>
    </section>
  );
}
