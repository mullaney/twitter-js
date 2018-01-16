const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const tweetbank = require('./tweetbank');
const routes = require('./routes');
const bodyParser = require('body-parser');

var socketio = require('socket.io');

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.engine('html', nunjucks.render)
app.set('view engine', 'html')
nunjucks.configure('views', { noCache: true })

// app.use('/', routes);

const devLogger = morgan('dev');
app.use(devLogger);

// app.use('/special', (req, res, next) => {
//   console.log('You\'ve reached the special place');
//   next();
// })

const server = app.listen(3000, () => {
  console.log('listening on 3000');
});

const io = socketio.listen(server);
app.use( '/', routes(io) );
