var socket = io();

socket.on('message', function(data) {

	$('.message').text(data.hello)

});