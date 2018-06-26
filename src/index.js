const app = require('./app');
const dbConnection = require('./database/db_connect');

/* eslint-disable no-console */
dbConnection.once('open', () => {
  app.listen(app.get('port'), () => {
    console.log('this app runs on port', app.get('port'));
  });
});
