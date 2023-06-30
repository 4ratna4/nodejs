const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const {
  INSERT_QUESTION,
//   ALL_QUESTIONS,
} = require("../controllers/question");

router.post("/question", INSERT_QUESTION);
// router.post("/allquestions", authMiddleware, ALL_QUESTIONS);


module.exports = router;