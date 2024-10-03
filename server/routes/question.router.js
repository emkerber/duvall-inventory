const expressQuestion = require('express');
const routerQuestion = expressQuestion.Router();
const poolQuestion = require('../modules/pool');
const rejectUnauthenticatedQuestion = require('../modules/authentication-middleware').rejectUnauthenticated;
routerQuestion.get('/', rejectUnauthenticatedQuestion, (req, res) => {
    const queryText = 'SELECT * FROM "question";';
    poolQuestion
        .query(queryText)
        .then((result) => {
        res.send(result.rows);
    })
        .catch((error) => {
        console.log('Failed to SELECT from question:', error);
        res.sendStatus(500);
    });
});
module.exports = routerQuestion;
