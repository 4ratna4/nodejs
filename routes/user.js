const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const {
  LOGUP_USER,
  LOGIN,
  } = require("../controllers/user");

router.post("/user", LOGUP_USER);
router.post("/logIn", LOGIN);



module.exports = router;
