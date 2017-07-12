var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/Mongo');

var BookSchema=new mongoose.Schema({
	name:String,
	isbn:Number
});

