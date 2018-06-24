const tape = require('tape');
const { dbConnection } = require('../src/database/db_connect');

/* eslint-disable no-console */

tape('clearing database', (t) => {
  Promise.all([
    dbConnection.collections['users'].drop(() => {
      console.log('users schema dropped');
    }),
    dbConnection.collections['events'].drop(() => {
      console.log('events schema dropped');
    }),
    dbConnection.collections['programs'].drop(() => {
      console.log('programs schema dropped');
    }),
  ])
    .then(t.end())
    .catch(err => t.error(err));
});
