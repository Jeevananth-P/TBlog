const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const blog_postsSchema = new mongoose.Schema({
  email: {
    type: String,
    requires: true
  },
  name: {
    type: String,
    requires: true
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required : true,
  },
});

const Blog = mongoose.model('blog_posts', blog_postsSchema);

module.exports = Blog;