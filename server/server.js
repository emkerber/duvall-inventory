const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5001;

// include middleware
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// include route files
const userRouter = require('./routes/user.router');
const categoryRouter = require('./routes/category.router');
const questionRouter = require('./routes/question.router');

// express setup
app.use(express.json());
app.use(express.urlencoded({extended: true}));
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
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
