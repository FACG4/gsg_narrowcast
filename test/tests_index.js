const tape = require('tape');
const dbConnection = require('../src/database/db_connect');

/* eslint-disable no-console */
/* eslint-disable global-require */

dbConnection.on('error', console.error.bind(console, 'error in connecting to the database'));

dbConnection.once('open', () => {
  Promise.resolve()
    .then(() => {
      // clearing the database.
      require('./db_reset');
    })
    .then(() => {
      // testing the database schema.
      require('./test_db');
    })
    .then(() => {
      // adding events
      require('./controllers/add_events');
    })
    .then(() => {
      // testing the error controllers
      require('./controllers/error');
    })
    .then(() => {
      // testing the home route
      require('./controllers/home');
    })
    .then(() => {
      // testing the update event controller
      require('./controllers/update_events');
    });

  tape.onFinish(() => {
    dbConnection.close();
  });
});
