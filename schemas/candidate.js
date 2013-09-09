candidateInfoSchema = new Schema({
	cName: {
		type:String,
		required: true
	},
	uId: {
		type:Number,
		required: true
	},
	contactNo: {
		type:Number,
		required: true
	},
	batch_code: {
		type:String,
		required: true
	},
	batch_name: {
		type:String,
		required:true
	},
	committee_code: {
		type:String,
		required: true
	},
	committee_name: {
		type:String,
		required: true
	},
	votes:{
		type: Schema.ObjectId
	}
});

candidateInfoSchema.methods.create = function create(object, callback) {
  console.log('candidateInfoSchema rcvd object: \n', object);
    if(!object.cName){
        //callback(new Error("PostSchema.methods.create: Bad arguments"));//TODO
	console.log("candidateInfoSchema.methods.create: Bad arguments, name", object.cName);}
     else if(!object.uId)
       console.log("candidateInfoSchema.methods.create: Bad arguments, User Id", object.uId);
     else if(!object.contactNo)
       console.log("candidateInfoSchema.methods.create: Bad arguments, contact No", object.contactNo);
     else if(!object.batch_code)
       console.log("candidateInfoSchema.methods.create: Bad arguments, Batch Code", object.batch_code);
     else if(!object.batch_name)
       console.log("candidateInfoSchema.methods.create: Bad arguments, Batch Name", object.batch_name);
     else if(!object.comm_code)
       console.log("candidateInfoSchema.methods.create: Bad arguments, Committee Code", object.comm_code);
     else if(!object.comm_name)
       console.log("candidateInfoSchema.methods.create: Bad arguments, Committee Name", object.comm_name);
    else {
        // date will be generated upon actual object creation, not client-side
        this.name = object.cNsame;
	this.uId = object.uId;
	this.contactNo = object.contactNo;
	this.batch_code = object.batch_code;
	this.batch_name = object.batch_name;
	this.comm_code = object.comm_code;
	this.comm_name = object.comm_name;
	this.votes=object.votes;
        callback(null);
    }
};

mongoose.model('candidateInfo', candidateInfoSchema, 'candidateInfo');
