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

router.get('/save', function (req, res) {
  let newWaterbottle = new newWaterbottleModel({
    Id: 2,
    Brand: 'Roemerquelle',
    Size: 1,
    Sprudel: 'Still',
    Price: 2.99,
    Origin: 'Gute Frage',
  });

  newWaterbottle.save(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send('Data inserted');
    }
  });
});

module.exports = router;
