var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/Mongo');

var UserSchema=new mongoose.Schema({
	name:String,
	isbn:Number
});

//声明了一个方法  自定义静态方法
UserSchema.statics.findByISBN=function(isbn,cb){
	this.findOne({isbn:isbn},function(err,doc){
		cb(err,doc);
	});
};

//自定义实例方法
UserSchema.methods.print=function(){
	console.log('User Information:');
	console.log('\tName:',this.name);

}

var User=mongoose.model('User',UserSchema);

var user=new User({
	name:'sw'
	isbn:123456
});

user.save(function(err){
	if(err){
		return console.log('save user faild ',err);
	}

	User.findByISBN(123456,function(err,doc){
		console.log('findByISBN,err,doc:',err,doc);
	});

	Usre.print();


});







