const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const {
  GET_ANSWER,
  INSERT_ANSWER,
  DELETE_ANSWER,
} = require("../controllers/answer");

router.post("/answer", authMiddleware, INSERT_ANSWER);
router.delete("/answer/:id", authMiddleware, DELETE_ANSWER);



module.exports = router;