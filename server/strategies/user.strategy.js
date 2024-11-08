const passportUserStrategy = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const encryptLibUserStrategy = require('../modules/encryption');
const poolUserStrategy = require('../modules/pool');
passportUserStrategy.serializeUser((user, done) => {
    done(null, user.id);
});
passportUserStrategy.deserializeUser((id, done) => {
    poolUserStrategy
        .query('SELECT * FROM "user" WHERE id = $1', [id])
        .then((result) => {
        // Handle Errors
        const resultArr = result === null || result === void 0 ? void 0 : result.rows;
        if (Array.isArray(resultArr) && typeof resultArr[0].password === 'string') {
            // user found
            const user = resultArr[0];
            delete user.password; // remove password so it doesn't get sent
            // done takes an error (null in this case) and a user
            done(null, user);
        }
        else {
            // user not found
            // done takes an error (null in this case) and a user (also null in this case)
            // this will result in the server returning a 401 status code
            done(null, null);
        }
    })
        .catch((error) => {
        console.log('Error with query during deserializing user ', error);
        // done takes an error (we have one) and a user (null in this case)
        // this will result in the server returning a 500 status code
        done(error, null);
    });
});
// Does actual work of logging in
passportUserStrategy.use('local', new LocalStrategy((username, password, done) => {
    poolUserStrategy
        .query('SELECT * FROM "user" WHERE username = $1', [username])
        .then((result) => {
        const user = result && result.rows && result.rows[0];
        if (user && encryptLibUserStrategy.comparePassword(password, user.password)) {
            // All good! Passwords match!
            // done takes an error (null in this case) and a user
            done(null, user);
        }
        else {
            // Not good! Username and password do not match.
            // done takes an error (null in this case) and a user (also null in this case)
            // this will result in the server returning a 401 status code
            done(null, null);
        }
    })
        .catch((error) => {
        console.log('Error with query for user ', error);
        // done takes an error (we have one) and a user (null in this case)
        // this will result in the server returning a 500 status code
        done(error, null);
    });
}));
module.exports = passportUserStrategy;
