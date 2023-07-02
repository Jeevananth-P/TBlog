let express = require("express")
const path = require('path');
const con = require("../controllers/user_controller.js");

const router = express.Router();

router.post("/reg", con.signup);

router.post("/login", con.signin);

module.exports = router