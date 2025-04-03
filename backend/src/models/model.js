const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number
});

module.exports = mongoose.model('Model', modelSchema);
