var mongoose=require('mongoose');
require('./model.js');

var Book=mongoose.model('Book');

var book=new Book({
	name:"Yeah",
	author:"SW",
	publiashTime:new Date()
});

//book.author='Asami';

book.save(function(err){
	console.log('save status:',err ? 'failed':'success');
});