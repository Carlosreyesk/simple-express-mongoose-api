const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const ItemModel = new mongoose.Schema({
  name: String,
  // type: { type: mongoose.Schema.ObjectId, ref: 'TypeModel' },
});

ItemModel.plugin(timestamps);
module.exports = mongoose.model('ItemModel', ItemModel);
