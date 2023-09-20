# Redux Feedback Loop

The Redux Feedback Loop project is a web application that allows users to provide feedback on various aspects of their experience, similar to Prime's feedback system. The feedback is collected over four views, and users can review and submit their feedback on a separate page. The feedback data is saved in a database.

## Setup

To set up and run the Redux Feedback Loop project, follow these steps:

### Prerequisites

Before you begin, ensure you have the following software installed on your computer:

- Node.js: You can download and install Node.js from [https://nodejs.org/](https://nodejs.org/).

### Database Setup

1. Create your database and tables using the provided `data.sql` file.

### Starting the Server

1. Open your terminal and navigate to the project directory.

2. Install project dependencies by running the following command in the project root directory:

   ```
   npm install
   ```

3. Start the server by running the following command:

   ```
   npm run server
   ```

   This command will launch the server, which listens on port 5000 by default.

### Starting the React Client

1. Open a new terminal tab or window.

2. Start the React client app by running the following command in the project root directory (in a separate terminal tab/window):

   ```
   npm run client
   ```

   This command will start the React development server, which listens on port 3000 by default.

### Accessing the Application

Once both the server and React client are running, you can access the Redux Feedback Loop application in your web browser by navigating to:

[http://localhost:3000](http://localhost:3000)

You can now provide feedback using the multi-part form and review and submit your feedback.

## Feedback Form

The feedback form consists of four views, each representing a different aspect of the feedback:

1. **Feeling**: Rate how you are feeling today.
2. **Understanding**: Rate how well you are understanding the content.
3. **Support**: Rate how well you are being supported.
4. **Comments**: Provide any additional comments you want to leave.

You can navigate between these views by clicking the "Next" button on each step. Input validation ensures that a score is provided before allowing you to advance to the next step.

## Review and Submit

After completing all four steps of the feedback form, you can review your feedback on the "Review" page. On this page, you cannot change your input. You can submit your feedback by clicking the "Submit" button.

## Developer Accomplishments

After completing the Redux Feedback Loop project, key developer accomplishments include:

- Designed and implemented a multi-part feedback form with Redux for state management, enhancing user feedback collection.

- Integrated input validation to ensure the submission of valid feedback scores, improving data accuracy.

- Developed a review page for users to review their feedback before submission, enhancing the user experience.

- Implemented server-side routes for submitting and persisting user feedback data in a database.

- Gained proficiency in full-stack web application development using Node.js, Express.js, and React.js.

- Utilized Material-UI to improve the user interface and styling of the application.

- Demonstrated expertise in version control and Git branching for efficient project management.

These accomplishments reflect the successful development of a user-friendly feedback system that effectively collects, reviews, and persists user feedback data.
