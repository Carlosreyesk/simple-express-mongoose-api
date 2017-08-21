/* eslint-disable consistent-return */
const express = require('express');
const ItemController = require('./../controllers/item.controller');

const apiRouter = express.Router();

apiRouter.get('/item/:id', (req, res) => {
  ItemController.getItem(req, res);
});
apiRouter.post('/item', (req, res) => {
  ItemController.createItem(req, res);
});

// export default apiRouter;
module.exports = apiRouter;
