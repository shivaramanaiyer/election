votePrefSchema = new Schema({
	whoChose1 : {
		type: Number
	},
	whoChose2 : {
		type: Number
	},
	whoChose3 : {
		type: Number
	},
	whoChose4 : {
		type: Number
	},
	whoChose5 : {
		type: Number
	}
});

votePrefSchema.methods.create = function create( callback){
 	callback(null);
};

mongoose.model('votePref', votePrefSchema, 'votePref');

