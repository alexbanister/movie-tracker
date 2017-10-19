// const Server = require('./server');
const path = require('path');
const express = require('express');
const cors = require('express-cors');
var bodyParser = require('body-parser');
const port = (process.env.PORT || 3000);
const app = express();
const users = require('./routes/usersApi');
const open = require('open'); //opens local host automatically

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.config.js');
  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
}

app.use(express.static('app'));

app.get('/', function (req, res) { res.sendFile(path.join(__dirname, '/index.html')) });

app.use('/api', users);
app.get('/*', function (req, res) { res.sendFile(path.join(__dirname, '/index.html')) });

app.listen(port);

console.log(`Listening at http://localhost:${port}`);

open(`http://localhost:${port}`);
