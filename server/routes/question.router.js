var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');
var rejectUnauthenticated = require('../modules/authentication-middleware').rejectUnauthenticated;
router.get('/', rejectUnauthenticated, function (req, res) {
    var queryText = 'SELECT * FROM "question";';
    pool
        .query(queryText)
        .then(function (result) { return res.send(result.rows); })
        .catch(function (error) {
        console.log('Failed to SELECT from question:', error);
        res.sendStatus(500);
    });
});
module.exports = router;
