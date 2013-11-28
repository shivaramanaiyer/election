app.post('/api/election/withdraw/:id',function(req,res){
	console.log(req.params.id, ' withdrawing application');
	withdrawApplication(req.params.id,function(err){
		if(err)
			res.send(err.message);
		else
			console.log('User withdrawn:', req.params.id);
	});
});
