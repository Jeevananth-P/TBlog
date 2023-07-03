let express = require("express")
const path = require('path');
const con = require("../controllers/user_controller.js");

const router = express.Router();

router.post("/reg", con.signup);

router.post("/login", con.signin);

router.get("/",(req,res) =>{
    res.sendFile("C:/Users/DELL/Downloads/RecipeBlog/public/registration.html");
})

router.get("/l",(req,res) =>{
    res.sendFile("C:/Users/DELL/Downloads/RecipeBlog/public/login.html");
})
module.exports = router