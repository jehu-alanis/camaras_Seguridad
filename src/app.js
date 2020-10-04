const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const session = require('express-session');
const validator = require('express-validator');
const passport = require('passport');
const flash = require('connect-flash');
const myConnection = require('express-myconnection');
const mysql = require('mysql');
const MySQLStore = require('express-mysql-session')(session);
const bodyParser = require('body-parser');

const { database } = require('./keys');

// Intializations


require('./lib/passport');

// importing routes
const customerRoutes = require('./routes/customer');


// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '7umdertaker',
  port: 3306,
  database: 'seguridad'
}, 'single'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.use(session({
  secret: 'justasecret',
  resave: false,
  saveUninitialized: false,
  store: new MySQLStore(database)
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());



// Global variables
app.use((req, res, next) => {
  app.locals.message = req.flash('message');
  app.locals.success = req.flash('success');
  app.locals.user = req.user;
  next();
});




app.use(require('./routes/authentication'));

// routes
app.use('/', customerRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static('images'));



////////////////////////


// Global variables

app.use(express.json());

app.use(express.urlencoded({extended: false}));


// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
