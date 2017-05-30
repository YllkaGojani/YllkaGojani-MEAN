var mongoose = require('mongoose');
var Rabbit = mongoose.model('Rabbit');
var rabbits = require('../controllers/rabbits.js');
module.exports = function(app){
	// READ: show all rabbits
	app.get('/',function(request,response){
		rabbits.show_index(request, response)
	});

	// show form to add new rabbit
	app.get('/rabbits/new',function(request,response){
		response.render('newRabbit');
	});

	// READ: show rabbit by id
	app.get('/rabbits/:id',function(request,response){
		rabbits.show_by_id(request, response);
	});


	// show form to edit existing rabbit
	app.get('/rabbits/edit/:id',function(request,response){
		rabbits.edit_by_id(request, response);
	});

	// CREATE: add new rabbit
	app.post('/rabbits',function(request,response){
		rabbits.create(request, response);
	});

	// UPDATE: edit existing rabbit
	app.post('/rabbits/:id',function(request,response){
		rabbits.update(request, response);
	});

	// DESTROY: remove existing rabbit
	app.post('/rabbits/destroy/:id',function(request,response){
		rabbits.destroy(request, response);
	});
}