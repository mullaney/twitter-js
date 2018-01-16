const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');


module.exports = function (io) {
  router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets, showForm: true } );
  });

  router.get( '/users/:name', function (req, res) {
    var name = req.params.name;
    var tweets = tweetBank.find( {name: name} );
    res.render( 'index', { tweets: tweets, showForm: true, name: name } );
  });

  router.get( '/tweets/:id', function (req, res) {
    var id = +req.params.id;
    var tweets = tweetBank.find( {id: id} );
    console.log(tweets);
    res.render( 'index', { tweets: tweets } );
  });

  router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    let tweet = tweetBank.add(undefined, name, text);
    io.sockets.emit('newTweet', tweet);
    res.redirect('/');
  });



  return router;
};

// module.exports = router;
