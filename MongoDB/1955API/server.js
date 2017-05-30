var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 8000;

var app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/1955_api');

var User_Schema = new mongoose.Schema({
  name: String
});
var User = mongoose.model('User', User_Schema);

// GET '/' will serve up the full collection of people born in 1955
app.get('/', function(req, res){
  User.find({},function(error,users){
    if(error)
      return handleError(error);
    res.json(users);
  });
});

// GET '/new/:name/' will add a name into the database which can be used for blank spaces. So adding Steve Jobs to our database, you'd type in the URL 'localhost:8000/new/Steve Jobs'
app.get('/new/:name/', function(req, res){
  console.log(req.params);
  User.create(req.params, function(error,users){
    if(error)
      return handleError(error);
    res.redirect('/');
  });
});

// GET '/remove/:name/' will delete a name from the database.
app.get('/remove/:name/', function(req, res){
  User.remove(req.params, function(err){
    if(err){
      console.log(err);
    } else {
      res.redirect('/')
    }
  });
});

// GET '/:name' will bring up the document of that particular person.
app.get('/:name', function(req,res){
  User.findOne(req.params, function(error, users){
    if(error)
      return handleError(error);
    res.json(user);
  });
});

app.listen(port, function(){
  console.log('listening on port 8000');
});