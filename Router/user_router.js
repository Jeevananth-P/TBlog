let express = require("express")
const path = require('path');
const con = require("../controllers/user_controller.js");

const router = express.Router();

router.post("/reg", con.signup);

router.post("/login", con.signin);

router.get("/",(req,res) =>{
    res.sendFile(path.join(path.dirname(__dirname),"/public/front.html"));
})

router.get("/login",(req,res) =>{
    res.sendFile(path.join(path.dirname(__dirname),"/public/login.html"));
})
module.exports = router