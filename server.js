var http = require('http');
var ecstatic = require('ecstatic');
var ip = require('ip');

var port = process.argv[2] ? process.argv[2] : 8000

var app = http.createServer(
  ecstatic({ root: __dirname + '/public'})
).listen(port);

var io = require('socket.io')(app);

console.log(
  'Server is running\n' +
  'Access the client in this machine: http://localhost:' + port + '\n' +
  'or in the local network: http://' + ip.address() + ':' + port + '\n' +
  'Press Ctrl-C to stop server'
)

io.on('connection', function (socket) {
  socket.emit('message', { hello: 'world'});
});