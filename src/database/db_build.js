const query = require('./queries/query');
const { build } = require('./queries/sql_commands');

query(build).catch().then(err => 'error in reading file, your check your db_build.sql file');
