var mongoose=require('mongoose');
require('./model.js');

var Book=mongoose.model('Book');

Book.findOne({author:"SW"},function(err,doc){
	if(err){
		console.log('err:',err);
		return ;
	}
	if(doc){
			doc.remove();
			console.log('success--remove:',doc);
	}
	else {
		console.log('no find doc');
	}

});
