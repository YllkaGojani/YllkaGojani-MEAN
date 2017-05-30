var express = require('express'),
	path = require('path'),
	parser = require('body-parser'),
	mongoose = require('mongoose'),
	port = 8000,
	Schema = mongoose.Schema,
	app = express();

app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'./client/static')))
app.set('views',path.join(__dirname,'./client/views'));
app.set('view engine','ejs');

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(port);