const mongoose = require('mongoose').set('debug', true);
require('env2')('./config.env');

const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl);
const dbConnection = mongoose.connection;

module.exports = dbConnection;
