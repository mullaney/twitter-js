const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const tweetbank = require('./tweetbank');
const routes = require('./routes');

app.use(express.static('public'));

app.engine('html', nunjucks.render)
app.set('view engine', 'html')
nunjucks.configure('views', { noCache: true })

app.use('/', routes);

const devLogger = morgan('dev');
app.use(devLogger);

// app.use('/special', (req, res, next) => {
//   console.log('You\'ve reached the special place');
//   next();
// })

app.listen(3000, () => {
  console.log('listening on 3000');
});


// [ '_readableState',
//   'readable',
//   'domain',
//   '_events',
//   '_eventsCount',
//   '_maxListeners',
//   'socket',
//   'connection',
//   'httpVersionMajor',
//   'httpVersionMinor',
//   'httpVersion',
//   'complete',
//   'headers',
//   'rawHeaders',
//   'trailers',
//   'rawTrailers',
//   'upgrade',
//   'url',
//   'method',
//   'statusCode',
//   'statusMessage',
//   'client',
//   '_consuming',
//   '_dumped',
//   'next',
//   'baseUrl',
//   'originalUrl',
//   '_parsedUrl',
//   'params',
//   'query',
//   'res' ]
