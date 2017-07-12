var mongoose=require('mongoose');
require('./model.js');

var Book=mongoose.model('Book');

Book.findOne({author:"Asami"},function(err,doc){
	if(err){
		console.log('err',err)
		return;
	}

	doc.author="SW";
	doc.save();
	console.log('findOne result:',doc);
});