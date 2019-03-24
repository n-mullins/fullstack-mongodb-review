const router = require('express').Router();
const controller = require('./controller');

router
  .route('/todos')
  .get(controller.get)
  .post(controller.post);

router
  .route('/todos/:_id')
  .put(controller.put)
  .delete(controller.delete);

module.exports = router;
