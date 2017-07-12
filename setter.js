var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/Mongo');

var User=mongoose.model('User',{
	nickname:{
		type:String,
		trim:true
	},
	blog:{
		type:String,
		set:function(url){
			if(!url) return url;
			if(0!==url.indexOf("http://") && 0!==url.indexOf("https://")){
				url='http://'+url;
			}

			return url;
		}
	}
});


var user=new User({
	nickname:" SW ",
	blog:'sw.com'
});

console.log('user:',user);
