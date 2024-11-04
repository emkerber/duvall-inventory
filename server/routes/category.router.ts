const expressCategory = require('express');
const routerCategory = expressCategory.Router();
const poolCategory = require('../modules/pool');
const rejectUnauthenticatedCategory = require('../modules/authentication-middleware').rejectUnauthenticated;

routerCategory.get('/', rejectUnauthenticatedCategory, (req: Req, res: Res) => {
  const queryText = 'SELECT * FROM "category" ORDER BY "id" ASC;';
  
  poolCategory
    .query(queryText)
    .then((result: { rows: [] }) => {
      res.send(result.rows)
    })
    .catch((error: string) => {
      console.log('Failed to SELECT from category:', error);
      res.sendStatus(500);
    });
});

module.exports = routerCategory;