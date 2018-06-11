const mongoose = require('mongoose');
// mongoose is similar to the pg module. The only problem is that I failed to
// place the connection string into the config.env

// const dbUrl = process.env.DB_URL; this will not work for some reason.

mongoose.connect('mongodb://localhost/buildsprint'); // auth is optional, and the localhost port has a default value if not specified.
const db = mongoose.connection; // I think this is similar to the way we export the pool.

module.exports = { db, mongoose };
