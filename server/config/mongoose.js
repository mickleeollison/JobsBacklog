var mongoose = require('mongoose'),
    appliedTypesModel = require('./../models/appliedTypes'),
    responsesModel = require('./../models/responses'),
	  User = require('./../models/user'),
    jobsModel = require('./../models/jobs');


module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('expresso db opened');
  });

  User.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      var user = new User();
      User.create({email: 'root', password:user.generateHash('password')});
    } 
  });
 
  appliedTypesModel.createDefaultAppliedTypes();
  responsesModel.createDefaultResponses();
  jobsModel.createDefaultJobs();
}; 
