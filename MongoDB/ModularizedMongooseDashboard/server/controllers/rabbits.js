var mongoose = require('mongoose');
var Rabbit = mongoose.model('Rabbit');
module.exports = {
	show_index: function(request, response){
		Rabbit.find({}, function(error,results){
		if(error)
			console.log(error);
		response.render('index',{rabbits:results});
		});
	},
	show_by_id: function(request, response){
		var id = request.params.id;
		Rabbit.find({_id: id}, function(error,results){
			if(error)
				console.log(error);
			response.render('showRabbit',{rabbit: results[0]});
		});
	},
	edit_by_id: function(request, response){
		var id = request.params.id;
		Rabbit.find({_id: id}, function(error,results){
			if(error)
				console.log(error);
			response.render('editRabbit',{rabbit: results[0]});
		});
	},
	create: function(request, response){
		console.log(request.body);
		Rabbit.create(request.body, function(error){
			if(error)
				console.log(error);
			response.redirect('/');
		});
	},
	update: function(request, response){
		var id = request.params.id;
		Rabbit.update({_id: id},request.body,function(error,results){
			if(error)
				console.log(error);
			response.redirect('/');
		});
	}, 
	destroy: function(request,response){
		var id = request.params.id;
		Rabbit.remove({_id: id},function(error,results){
			if(error)
				console.log(error);
			response.redirect('/');
		});
	}
}