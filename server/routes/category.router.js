const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  const queryText = 'SELECT * FROM "category" ORDER BY "id" ASC;';
  
  pool
    .query(queryText)
    .then(result => res.send(result.rows))
    .catch(error => {
      console.log('Failed to SELECT from category:', error);
      res.sendStatus(500);
    });
});

module.exports = router;