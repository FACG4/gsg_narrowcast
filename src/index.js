const app = require('./app');

app.listen(app.get('port'), () => {
  console.log('this app runs on port', app.get('port'));
});
