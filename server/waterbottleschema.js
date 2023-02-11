let mongoose = require('mongoose');

let BottleSchema = new mongoose.Schema({
  Id: Number,
  Brand: String,
  Size: Number,
  Sprudel: String,
  Price: Number,
  Origin: String,
});

module.exports = mongoose.model('waterbottle', BottleSchema, 'Waterbottles');
