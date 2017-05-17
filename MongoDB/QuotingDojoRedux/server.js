var express = require('express');
var path = require('path');
var parser = require('body-parser');
var mongoose = require('mongoose');
var port = 8000;
var Schema = mongoose.Schema;
var app = express();

app.use(parser.urlencoded({extended:true}));
mongoose.connect('mongodb://localhost/quotingDojoRedux');
mongoose.connection.on('connected',function(){
	console.log('mongodb connected.');
});

var QuotesSchema = new Schema({
	name: String,
	quote: String
},{timestamp: true});

var Quote =  mongoose.model('Quote',QuotesSchema);

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/',function(request,response){
	response.render('index');
});
app.get('/quotes',function(request,response){
	Quote.find({}, function(error,results){
		if(error)
			console.log(error);
		response.render('quotes',{users:results});
	});
});
app.post('/quotes',function(request,response){
	console.log(request.body);
	Quote.create(request.body,function(error){
		if(error)
			console.log(error);
		response.redirect('/quotes');
	});
});

app.listen(port,function(){
	console.log('Listening on port: ',port);
});