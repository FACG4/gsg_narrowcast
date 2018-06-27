const { dbConnection } = require('../src/database/db_connect');
const tape = require('tape');


dbConnection.on('error', console.error.bind(console, 'error in connecting to the database'));

dbConnection.once('open', () => {

  require('./db_reset');

  require('./test_db');

  require('./controllers/event_db.js')

  tape.onFinish(() => {
    dbConnection.close();
  });
});
