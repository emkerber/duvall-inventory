var express = require('express');
var app = express();
require('dotenv').config();
var PORT = process.env.PORT || 5001;
// include middleware
var sessionMiddleware = require('./modules/session-middleware');
var passport = require('./strategies/user.strategy');
// include route files
var userRouter = require('./routes/user.router');
var categoryRouter = require('./routes/category.router');
var questionRouter = require('./routes/question.router');
// express setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'));
// Passport session configuration
app.use(sessionMiddleware);
// start Passport sessions
app.use(passport.initialize());
app.use(passport.session());
// define route URLs
app.use('/api/user', userRouter);
app.use('/api/category', categoryRouter);
app.use('/api/question', questionRouter);
// define port on which to listen
app.listen(PORT, function () {
    console.log("Listening on port: ".concat(PORT));
});
