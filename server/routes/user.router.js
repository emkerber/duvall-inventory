var expressUser = require('express');
var routerUser = expressUser.Router();
var rejectUnauthenticatedUser = require('../modules/authentication-middleware').rejectUnauthenticated;
var encryptLib = require('../modules/encryption');
var poolUser = require('../modules/pool');
var userStrategy = require('../strategies/user.strategy');
// Handles Ajax request for user information if user is authenticated
routerUser.get('/', rejectUnauthenticatedUser, function (req, res) {
    // Send back user object from the session (previously queried from the database)
    res.send(req.user);
});
// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
routerUser.post('/register', function (req, res) {
    var username = req.body.username;
    var password = encryptLib.encryptPassword(req.body.password);
    var queryText = "INSERT INTO \"user\" (username, password)\n    VALUES ($1, $2) RETURNING id";
    poolUser
        .query(queryText, [username, password])
        .then(function () { return res.sendStatus(201); })
        .catch(function (err) {
        console.log('User registration failed: ', err);
        res.sendStatus(500);
    });
});
// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
routerUser.post('/login', userStrategy.authenticate('local'), function (req, res) {
    res.sendStatus(200);
});
// clear all server session information about this user
routerUser.post('/logout', function (req, res) {
    // Use passport's built-in method to log out the user
    req.logout();
    res.sendStatus(200);
});
module.exports = routerUser;
