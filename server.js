const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRouter = require('./routes/server.routes');

mongoose.Promise = global.Promise;
// MONGODB connection
mongoose.connect('mongodb://carlos:pa$$worD@ds023463.mlab.com:23463/item-dev', { useMongoClient: true });

const app = express();
// REST API configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// API prefix configuration
app.use('/api', apiRouter);

app.listen(8080, (err) => {
  if (err) console.error(`==> 😭  OMG!!! ${err}`);
  console.log('Example app listening on port 8080!')
});
