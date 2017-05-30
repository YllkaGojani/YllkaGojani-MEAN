var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RabbitSchema = new Schema({
	name: String,
	age: Number,
	color: String
},{timestamp: true});

var Rabbit = mongoose.model('Rabbit',RabbitSchema);