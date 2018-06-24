const { dbConnection } = require('../src/database/db_connect');
const tape = require('tape');

/* eslint-disable no-console */
/* eslint-disable global-require */

dbConnection.on('error', console.error.bind(console, 'error in connecting to the database'));

dbConnection.once('open', () => {
  // clearing the database
  require('./db_reset');

  require('./test_db');

  require('./controllers/event_db.js')

  tape.onFinish(() => {
    dbConnection.close();
  });
});
