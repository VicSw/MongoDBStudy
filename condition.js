var mongoose=require('mongoose');
require('./model.js');

var Book=mongoose.model('Book');

var cond={
	$or:[
		{author:'SW'},
		{author:"Asami"}
	]
};

Book.find(cond,function(err,doc){
	if(err){
		console.log('err:',err);
		return;
	}

	console.log('doc:',doc);
});