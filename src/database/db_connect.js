const mongoose = require('mongoose');
require('env2')('./config.env');


dburl = 'mongodb://localhost/database'
mongoose.connect(dburl);

module.exports =   mongoose.connection;
