const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const {
  GET_QUESTION_ANSWERS,
  INSERT_ANSWER,
  DELETE_ANSWER,
} = require("../controllers/answer");

router.get("/question/:id/answers", GET_QUESTION_ANSWERS);
router.post("/question/:id/answers", INSERT_ANSWER);
router.delete("/answer/:id", DELETE_ANSWER);



module.exports = router;