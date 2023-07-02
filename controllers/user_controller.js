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
    
        res.status(201).json({ message: 'User registered successfully' });
      } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
        //res.send(err);
      }
}

exports.signin = async (req,res) => {
    try {
        const { email, password } = req.body;
    
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
    
        // Compare the provided password with the stored password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(401).json({ message: 'Invalid Password' });
        }
    
        // Create and return a JWT token
        const token = jwt.sign({ userId: user._id }, 'secretKey');
        res.json({ token });
      } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
        //res.send("error" + err)
      }
}
