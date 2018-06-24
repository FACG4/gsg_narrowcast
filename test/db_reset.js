const tape = require('tape');
const dbConnection = require('../src/database/db_connect');

/* eslint-disable no-console */
/* eslint-disable dot-notation */


tape('clearing database', (t) => {
  if (dbConnection.collections.users) {
    dbConnection.collections.users.drop(() => {
      console.log('users schema dropped');
    });
  }
  if (dbConnection.collections.events) {
    dbConnection.collections.events.drop(() => {
      console.log('events schema dropped');
    });
  }
  if (dbConnection.collections.programs) {
    dbConnection.collections.programs.drop(() => {
      console.log('programs schema dropped');
    });
  }
  t.end();
});
