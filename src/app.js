const { express, path, exphbs } = require('./reqs');
const controllers = require('./controllers');
const bodyParser = require('body-parser');
const dbConnection = require('./database/db_connect')
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  defaultLayout: 'main'
}));

const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));





app.use(controllers)
app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('port', process.env.PORT || 3000);

module.exports = app;
