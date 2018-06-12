const mongoose = require('mongoose');
require('env2')('./config.env');
// mongoose is similar to the pg module. The only problem is that I failed to
// place the connection string into the config.env

const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl); // auth is optional, and the localhost port has a default value if not specified.
const dbConnection = mongoose.connection; // I think this is similar to the way we export the pool.

module.exports = { dbConnection, mongoose };
