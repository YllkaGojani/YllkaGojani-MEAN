var express = require('express'),
	path = require('path'),
	parser = require('body-parser'),
	mongoose = require('mongoose'),
	port = 8000,
	Schema = mongoose.Schema,
	app = express();

app.use(parser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/rabbits');
mongoose.connection.on('connected',function(){
	console.log('mongoDB connected');
});

var RabbitSchema = new Schema({
	name: String,
	age: Number,
	color: String
},{timestamp: true});

var Rabbit = mongoose.model('Rabbit',RabbitSchema);

app.set('views',path.join(__dirname,'./views'));
app.set('view engine','ejs');

// READ: show all rabbits
app.get('/',function(request,response){
	Rabbit.find({}, function(error,results){
		if(error)
			console.log(error);
		response.render('index',{rabbits:results});
	});
});


// show form to add new rabbit
app.get('/rabbits/new',function(request,response){
	response.render('newRabbit');
});

// READ: show rabbit by id
app.get('/rabbits/:id',function(request,response){
	var id = request.params.id;
	Rabbit.find({_id: id}, function(error,results){
		if(error)
			console.log(error);
		response.render('showRabbit',{rabbit: results[0]});
	});
});


// show form to edit existing rabbit
app.get('/rabbits/edit/:id',function(request,response){
	var id = request.params.id;
	Rabbit.find({_id: id}, function(error,results){
		if(error)
			console.log(error);
		response.render('editRabbit',{rabbit: results[0]});
	});
});

// CREATE: add new rabbit
app.post('/rabbits',function(request,response){
	console.log(request.body);
	Rabbit.create(request.body, function(error){
		if(error)
			console.log(error);
		response.redirect('/');
	});
});

// UPDATE: edit existing rabbit
app.post('/rabbits/:id',function(request,response){
	var id = request.params.id;
	Rabbit.update({_id: id},request.body,function(error,results){
		if(error)
			console.log(error);
		response.redirect('/');
	});
});

// DESTROY: remove existing rabbit
app.post('/rabbits/destroy/:id',function(request,response){
	var id = request.params.id;
	Rabbit.remove({_id: id},function(error,results){
		if(error)
			console.log(error);
		response.redirect('/');
	});
});



app.listen(port);