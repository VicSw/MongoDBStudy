var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/Mongo');

var UserSchema=new mongoose.Schema({
	nickname:{
		type:String,
		default:'new user'
	},
	regTime:{
		type:Date,
		default:Date.now
	}

});

var User=mongoose.model('User',UserSchema);

var user=new User();

console.log('user:',user);

