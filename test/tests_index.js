const dbConnection = require('../src/database/db_connect');
const tape = require('tape');

/* eslint-disable no-console */
/* eslint-disable global-require */

dbConnection.on('error', console.error.bind(console, 'error in connecting to the database'));

dbConnection.once('open', () => {
  // clearing the database.
  require('./db_reset');

  // testing the database schema.
  require('./test_db');

  // testing the 404 error
  require('./controllers/error');

  // testing the home route
  require('./controllers/home');

  // testing the viewEvents route
  require('./controllers/view_events');

  // testing the viewEvents route
  require('./controllers/delete_event');


  tape.onFinish(() => {
    dbConnection.close();
  });
});
