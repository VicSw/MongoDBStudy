var mongoose=require("mongoose");

var uri="mongodb://localhost/Mongo";

mongoose.connect(uri);

var BookSchema=new mongoose.Schema({
	name:String,
	author:String,
	publiashTime:Date
});

mongoose.model('Book',BookSchema);