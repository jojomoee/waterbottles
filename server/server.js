const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');

let bottleModel = require('./waterbottleschema');

const port = 3000;
const app = express();

app.listen(port, function () {
  console.log('running at port: ' + port);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', api);

app.get('/save', function (req, res) {
  let newWaterbottle = new bottleModel({
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
