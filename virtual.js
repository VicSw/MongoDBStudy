var mongoose=require('mongoose');

var PersonSchema=new mongoose.Schema({
	firstName:String,
	lastName:String
});

PersonSchema.virtual('fullName').get(function(){
	return this.firstName+' '+this.lastName;
});

PersonSchema.set('toJson',{getters:true,virtual:true});

var Person=mongoose.model('Person',PersonSchema);

var person=new Person({
	firstName:'Vic',
	lastName:'Sun'

});

console.log('user fullName:',person.fullName);

console.log('JSON:',JSON.stringify(person));

