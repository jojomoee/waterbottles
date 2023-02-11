let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();
let bottleModel = require('./waterbottleschema');

let uri = `mongodb+srv://jojom:<password>@cluster0.obzgbew.mongodb.net/?retryWrites=true&w=majority`;

const db = uri;
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);

mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error) {
    if (error) {
      console.log('Error!' + error);
    }
  }
);

module.exports = router;
