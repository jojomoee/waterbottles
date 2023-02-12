let express = require('express');
const req = require('express/lib/request');
let mongoose = require('mongoose');
let router = express.Router();
let bottleModel = require('./waterbottleschema');
require('dotenv').config();

const user = process.env.USER_NAME;
const pw = process.env.PASSWORD;
let uri = `mongodb+srv://jojom:${pw}@cluster0.obzgbew.mongodb.net/?retryWrites=true&w=majority`;

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
