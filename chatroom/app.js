
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes/index');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var socketio = require('socket.io');
var app = express();

// all environments
app.use(express.static('./public'));

//index route
app.get('/', routes.index);


var server = app.listen(3000, function(){
  console.log('Express server listening on port ' +3000);
});

//Start the web socket server
var io = socketio.listen(server);

var users = {}

//If the client just connected
io.sockets.on('connection', function(socket) {
  socket.on('message',function(message){
    // io.sockets.emit('message');
      console.log(message);
    io.sockets.emit('message',message);
  })

});
