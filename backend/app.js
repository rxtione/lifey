var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mysql = require('mysql');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var conf = require('./config');

global.glb_app_name = process.env.name;
global.glb_sess_name = 'SESS_' + glb_app_name;
global.glb_svr_ips = conf.ips;
global.glb_db_nm = {};
// DB connection pool set
global.glb_pool = mysql.createPool({
	connectionLimit : conf.db.connectionLimit,
	host : glb_svr_ips.db,
	port : conf.db.port,
	user : conf.db.user,
	password : conf.db.password,
	database: conf.db.name,
	multipleStatements: true
});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/movies');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/movies', moviesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
