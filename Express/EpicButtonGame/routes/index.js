module.exports = function Route(app, server)
{
	var io = require('socket.io').listen(server);
	var count = 0 ;
	io.sockets.on('connection',function(socket)
	{
		socket.on('push_button',function(data)
		{
			count += 1;
			io.emit('push_counter',{response: count});
		})
		socket.on('reset_counter',function(data)
		{
			count = 0;
			io.emit('reset_response',{response: count});
		})
	})

	app.get('/',function(request,response)
	{
		response.render('index');
	})
};