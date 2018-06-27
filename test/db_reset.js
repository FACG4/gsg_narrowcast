const tape = require('tape');
const { dbConnection } = require('../src/database/db_connect');


tape('clearing database', (t) => {
  if (dbConnection.collections['users']) {
    dbConnection.collections['users'].drop(() => {

    });
  }

  if (dbConnection.collections['events']) {
    dbConnection.collections['events'].drop(() => {
   
    });
  }

  if (dbConnection.collections['programs']) {
    dbConnection.collections['programs'].drop(() => {
 
    });
  }
  t.end();
});
