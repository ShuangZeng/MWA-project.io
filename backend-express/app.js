const config = require('config');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet')
const mongoose = require("mongoose");
var questions = require('./routes/questions');
var users = require('./routes/users');
var auth = require('./routes/auth');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('strict routing', true);
app.set('port', process.env.PORT || 3000);
const port = app.get('port');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet())
// if (!config.get('jwtPrivateKey')){
//    console.error('FATAL ERROR: jwtPrivateKey is not defined')
//    process.exit(1);
// }
// const connect = mongoose.connect("mongodb+srv://sysadmin:Admin2020@tutaappcluster-ho95w.mongodb.net/team4?retryWrites=true" ,{useNewUrlParser:true})
// .then(()=> console.log("Connected to DB!"))
// .catch(error => console.log("Couldnt connect to DB!", error.message));
const mongooseConnect = require("./config/config");
// mongooseConnect;

app.use('/questions', questions);
app.use('/users', users);
app.use('/auth',auth );

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

// module.exports = app;
app.listen(3000, ()=> console.log(`listing to port ${port}`))
