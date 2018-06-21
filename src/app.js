const { express, path, exphbs, controllers, serverError } = require('./reqs');


const app = express();

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
app.use(serverError);


module.exports = app;
