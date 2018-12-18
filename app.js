var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');


var login = require('./routes/login');
var singIn = require('./routes/singIn');
var home = require('./routes/home');
var profile = require('./routes/profile');
var logout = require('./routes/logout');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
var sessionTime = 3600000 * 24;//1 hour
app.use(session({
  cookie: { maxAge: sessionTime },
  resave: true,
  saveUninitialized: false,
  secret: 'PGSecret'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', login);
app.use('/sign_in', singIn);
app.use('/home', home);
app.use('/profile', profile);
app.use('/logout', logout);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
