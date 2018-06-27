const mongoose = require('mongoose');


const usersSchema = mongoose.Schema({
  role: Number,
  username: { type: String, unique: true },
  password: String,
  email: { type: String, unique: true },
});

const Users = mongoose.model('users', usersSchema);


module.exports = Users;
