
var users = [];
var messages = [];

// check if our user name is already in the user array
var if_user = function(user)
{
	var users_count = users.length;
	for (var i = 0; i < users_count; i++) {
		if(user == users[i])
		{
			return true;
		}
	}
	return false;
};

module.exports = function Route(app, server)
{
	app.get('/',function(request, response)
	{
		response.render('index');
	});

	var io = require('socket.io').listen(server);

	io.sockets.on('connection',function(socket)
	{
		// SERVER LISTENS for the 'page_load' event, and when it is triggered checks if the user exists or not
		socket.on('page_load',function(data)
		{	
			// SERVER EMITS the 'existing_user' event if the condition returns true
			if(if_user(data.user) === true)
			{
				socket.emit('existing_user',{error: 'This user already exists'});
			}
			// SERVER EMITS the 'load_messages' event, if the condition returns false, and adds the new user
			else
			{
				users.push(data.user);
				socket.emit('load_messages',{current_user: data.user, messages: messages});
			}
		})

		// SERVER LISTENS for the 'new_message' event, and when it is triggered, pushes the data(user and message) to messages array
		socket.on('new_message',function(data)
		{
			messages.push({name: data.user, message: data.message});
			// SERVER EMITS(full broadcast) the 'post_new_message' event
			io.emit('post_new_message',{new_message: data.message, user: data.user});
		})
	})
};