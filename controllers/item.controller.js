const ItemModel = require('./../models/item');

const getItem = (req, res) => {
  try {
    if (req.params.id) {
      ItemModel.findOne({ _id: req.params.id })
        .exec((itemFindError, item) => {
          if (itemFindError) throw itemFindError;
          res.send({ success: true, item });
        });
    } else {
      res.json({ success: false, message: 'No id provided' });
    }
  } catch(error) {
    res.json({ success: false, message: error });
  }
};

const createItem = (req, res) => {
  try {
    if (req.body.item) {
      const item = new ItemModel();
      item.name = req.body.item.name;
      item.save((saveItemError) => {
        if (saveItemError) throw saveItemError;
        res.send({ success: true, item });
      });
    }
  } catch(error) {
    res.json({ success: false, message: error });
  }
};

module.exports = {
  getItem,
  createItem,
};

