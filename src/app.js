const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const error = require('./controllers/error');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  defaultLayout: 'main',
}));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('port', process.env.PORT || 3000);
app.use(controllers);
app.use(error.notFound);
app.use(error.serverError);

module.exports = app;
