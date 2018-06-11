const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/buildsprint');
const db = mongoose.connection;

module.exports = { db, mongoose };
