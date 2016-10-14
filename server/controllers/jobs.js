var Jobs = require('mongoose').model('Jobs');
var async = require('async');

exports.getJobs = function(req, res) {
	console.log(req.user.local.email);
  Jobs.find({'user':req.user._id}).populate('applied').populate('response').populate('user').exec(function(err, jobs) {
	res.send(jobs);
  })
};

exports.getJob = function(req, res) {
  var id = req.params.id;
  Jobs.findById(id).populate('applied').populate('response').populate('user').exec(function(err, jobs) {
	res.send(jobs);
  })
};

exports.createJob = function(req, res) {
  	var job = req.body;
		job.user = req.user._id;
	
	Jobs.create(job, function(err, response) {
		if (err) throw err; 
		else console.log('Job created!');
		res.send(response);
	});
};

exports.updateJob = function(req, res){
	var id = req.params.id;
	var job = req.body;
	job.user = req.user._id;
	
	Jobs.findByIdAndUpdate(id, job, function(err, response) {
		if (err) throw err; 
		else console.log('Job Updated!');
		res.send(response);
	});
}; 

exports.removeJob = function(req, res){
	var id = req.params.id;
	Jobs.findByIdAndRemove(id, function(err,response) {
		if (err) throw err;
	console.log('Job deleted!');
	res.send(response);
	});
};