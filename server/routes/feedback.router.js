const express = require("express");
const router = express.Router();

const pool = require("../modules/pool.js");

// GET all feedback from database
router.get("/", (req, res) => {
  let query = `SELECT * FROM "feedback" ORDER BY "id" ASC; `;

  pool
    .query(query)
    .then((result) => {
      console.log("Feedback received from database! Result is:", result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error receiving feedback from database. Error is:", error);
      res.sendStatus(500);
    });
});

// POST feedback to database
router.post("/", (req, res) => {
  // Declaring feedback
  let feedback = req.body;
  console.log("Adding feedback:", feedback);

  // SQL query
  let query = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES ($1, $2, $3, $4);
 `;

  //  Pool query request
  pool
    .query(query, [
      feedback.feeling,
      feedback.understanding,
      feedback.support,
      feedback.comments,
    ])
    .then((result) => {
      console.log("Feedback sent to database!");
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error adding feedback to database. Error is:", error);
      res.sendStatus(500);
    });
});

module.exports = router;
