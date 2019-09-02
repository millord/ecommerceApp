const express = require("express");
const router = express.Router();

const { signup, sigin } = require("../controllers/user");
const { userSignupValidator } = require("../validator");

router.post("/signup", userSignupValidator, signup);
router.post("/sigin", sigin);

module.exports = router;
