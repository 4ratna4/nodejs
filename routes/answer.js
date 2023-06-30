const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const {
  INSERT_ANSWER,
  // ALL_ANSWERS,
} = require("../controllers/answer");

router.post("/answer", INSERT_ANSWER);
// router.post("/allanswers", authMiddleware, ALL_ANSWERS);


module.exports = router;