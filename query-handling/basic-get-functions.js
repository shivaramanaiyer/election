function makeJSON(year,callback){
	var result = year.toJSON();
	callback(result);
};

getAllCandidatesByYear = function(year,callback){
	var result = [];
	VSchemas.Year.find({"year":year},function(err,year){
		if(err){
			throw err
		}
		else {
			console.log("year fetched");
			year.forEach(function(yer,index1,array1){
				console.log(yer);
				//var candidates = yer.candidates;
				yer.candidates.forEach(function(candidate,index,array){
					VSchemas.Candidate.find({"uId":candidate},function(err,candidateinfo){
						if(err) callback(err);
						else{
							candidateinfo = candidateinfo;
							result.push(candidateinfo);
							if(index == array.length - 1)
								callback(null,result);
						}
					});
				});
			});
			
		}
	});
};

getCandidateByUsrId = function(year,usrId,callback){
	VSchemas.Year.find({"year":year},function(err,year){
		if(err){
			throw err
		}
		else {
			console.log("year fetched");
			year.forEach(function(yer,index1,array1){
				console.log(yer);
				//var candidates = yer.candidates;
				yer.candidates.forEach(function(candidate,index,array){
					VSchemas.Candidate.find({"uId":candidate},function(err,candidateinfo){
						if(err) callback(err);
						else{
							if(candidateinfo.uId == usrId){
								callback(null,candidateinfo);
							}
						}
					});
				});
			});
			
		}
	});
};

getCandidatesByBatch = function(year,batch_code,callback){
	var result = [];
	VSchemas.Year.find({"year":year},function(err,year){
		if(err){
			throw err
		}
		else {
			console.log("year fetched");
			year.forEach(function(yer,index1,array1){
				console.log(yer);
				//var candidates = yer.candidates;
				yer.candidates.forEach(function(candidate,index,array){
					VSchemas.Candidate.find({"uId":candidate},function(err,candidateinfo){
						if(err) callback(err);
						else{
							if(candidateinfo.batch_code == batch_code){
								console.log("Candidate fetched");
								candidateinfo = candidateinfo;
								result.push(candidateinfo);
								
							}
							if(index == array.length - 1)
								callback(null,result);
							
						}
						
					});
				});
			});
			
		}
	});
} 

//-------------ELECTIONS--------------

getAllYears = function(callback){
	var result = [];
	VSchemas.Year.find(function(err,years){
		if(err){
			console.log(err.message);
		}
		else{
		 	if(!years.length){
		 		console.log("no length some issue");
			}
			//var candidates = year.candidates;
			years.forEach(function(year,index,array){
				year = year.toJSON();
				result.push(year);
				if(index == array.length - 1)
					callback(null,result);
			});
			
		}
	});
};

