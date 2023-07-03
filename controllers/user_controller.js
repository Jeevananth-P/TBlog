
const User = require("../models/userModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.signup = async (req, res) => {
    try {
        //console.log(req.body)
        const {name, email, password ,city } = req.body;
    
        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: 'Email already exists' });
        }
    
        // Create a new user
        const newUser = new User({name, email, password, city});
        await newUser.save();
        await alert("User registered successfully")
        res.status(201).sendFile("C:/Users/DELL/Downloads/RecipeBlog/public/login.html")
      } catch (err) {
        //console.log(err)
        res.status(500).json({ message: 'Internal server error' });
      }
}

exports.signin = async (req,res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        //console.log(req.body)
        //console.log(email+"  "+password)
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
    
        // Compare the provided password with the stored password
        //const isMatch = await bcrypt.compare(password, user.password);
        if (password !== user.password) {
          return res.status(401).json({ message: 'Invalid Password' });
        }
    
        // Create and return a JWT token
        //const token = jwt.sign({ userId: user._id }, 'secretKey');
        res.sendFile("C:/Users/DELL/Downloads/RecipeBlog/public/home.html");
      } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
        //res.send("error" + err)
      }
}
