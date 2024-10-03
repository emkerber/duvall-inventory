const expressUser = require('express');
const routerUser = expressUser.Router();
const rejectUnauthenticatedUser = require('../modules/authentication-middleware').rejectUnauthenticated;
const encryptLib = require('../modules/encryption');
const poolUser = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
// Handles Ajax request for user information if user is authenticated
routerUser.get('/', rejectUnauthenticatedUser, (req, res) => {
    // Send back user object from the session (previously queried from the database)
    res.send(req.user);
});
// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
routerUser.post('/register', (req, res) => {
    const username = req.body.username;
    const password = encryptLib.encryptPassword(req.body.password);
    const queryText = `INSERT INTO "user" (username, password)
    VALUES ($1, $2) RETURNING id`;
    poolUser
        .query(queryText, [username, password])
        .then(() => res.sendStatus(201))
        .catch((err) => {
        console.log('User registration failed: ', err);
        res.sendStatus(500);
    });
});
// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
routerUser.post('/login', userStrategy.authenticate('local'), (req, res) => {
    res.sendStatus(200);
});
// clear all server session information about this user
routerUser.post('/logout', (req, res) => {
    // Use passport's built-in method to log out the user
    req.logout();
    res.sendStatus(200);
});
module.exports = routerUser;
