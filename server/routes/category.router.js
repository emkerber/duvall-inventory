var expressCategory = require('express');
var routerCategory = expressCategory.Router();
var poolCategory = require('../modules/pool');
var rejectUnauthenticatedCategory = require('../modules/authentication-middleware').rejectUnauthenticated;
routerCategory.get('/', rejectUnauthenticatedCategory, function (req, res) {
    var queryText = 'SELECT * FROM "category" ORDER BY "id" ASC;';
    poolCategory
        .query(queryText)
        .then(function (result) {
        res.send(result.rows);
    })
        .catch(function (error) {
        console.log('Failed to SELECT from category:', error);
        res.sendStatus(500);
    });
});
module.exports = routerCategory;
