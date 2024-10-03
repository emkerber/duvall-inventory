var expressQuestion = require('express');
var routerQuestion = expressQuestion.Router();
var poolQuestion = require('../modules/pool');
var rejectUnauthenticatedQuestion = require('../modules/authentication-middleware').rejectUnauthenticated;
routerQuestion.get('/', rejectUnauthenticatedQuestion, function (req, res) {
    var queryText = 'SELECT * FROM "question";';
    poolQuestion
        .query(queryText)
        .then(function (result) {
        res.send(result.rows);
    })
        .catch(function (error) {
        console.log('Failed to SELECT from question:', error);
        res.sendStatus(500);
    });
});
module.exports = routerQuestion;
