const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = require("./Router/user_router");
const port = 5000

let app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use(router);


// !DB connection
mongoose.connect('mongodb://127.0.0.1:27017/Reciepe_Blog', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log("Connected to DB"));



app.listen(port, () => {
    console.log("Running on Port : "+port)
});