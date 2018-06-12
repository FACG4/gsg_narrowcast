const { dbConnection } = require('../src/database/db_connect');
const tape = require('tape');

/* eslint-disable no-console */

dbConnection.on('error', console.error.bind(console, 'error in connecting to the database'))

dbConnection.once('open', () => {
  require('./test_db');

  tape.onFinish(() => {
    dbConnection.close();
  });
});
