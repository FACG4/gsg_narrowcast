const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    role: Number,
    username: { type: String, unique: true },
    password: String,
    email: { type: String, unique: true },
  });
 module.exports = mongoose.model('Users' ,usersSchema);
  