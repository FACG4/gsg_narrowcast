const mongoose = require('mongoose');
require('env2')('./config.env');

// const dbUrl = process.env.DB_URL;
// if (!dbUrl) throw new Error('No database found');
dburl = 'mongodb://localhost/database'
mongoose.connect(dburl);
const dbConnection = mongoose.connection;

module.exports = { dbConnection, mongoose };
