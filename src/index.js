const app = require('./app');

/* eslint-disable no-console */

app.listen(app.get('port'), () => {
  console.log('this app runs on port', app.get('port'));
});
