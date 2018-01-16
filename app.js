const express = require('express');
const app = express();
const morgan = require('morgan');

const devLogger = morgan('dev');

// const logger = (req, res, next) => {
//   console.log(req.method, req.url, res.statusCode);
//   next();
// };

app.use('/special', (req, res, next) => {
  console.log('You\'ve reached the special place');
  next();
})

app.use(devLogger);

app.get('/', (req, res, next) => {
  //
  res.send('home!');
  next();
});

app.get('/hello/', (req, res, next) => {
  //
  res.send('Hello!');
  next();
});



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
