var mongoose = require('mongoose'),
	AppliedTypes = require('mongoose').model('AppliedTypes'),
  Responses = require('mongoose').model('Responses'),
	Schema = mongoose.Schema;

var jobsSchema = mongoose.Schema({
  dateAdded: { type: Date, default: Date.now },
  dateExpires: { type: Date},
  dateApplied: { type: Date},
  dateResponded: { type: Date},
  position: {type:String},
  company: {type:String},
  location: {type:String},
  comment: {type:String},
  applied: {type:Number, ref:'AppliedTypes', default:1},
  response: {type:Number, ref:'Responses', default:1},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', default: '5800a39439889b352c087928'}
});

var Jobs = mongoose.model('Jobs', jobsSchema);

function createDefaultJobs() {
  Jobs.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      Jobs.create({position:'Pilot',company:'American Airlines',location:'Los Angelas', comment: "afraid to fly but love to travel"});
      Jobs.create({position:'Electrician',company:'City of Portland',location:'Portland', comment: "tell HR I know Susan"});
      Jobs.create({position:'Police Officer',company:'NYPD',location:'New York', comment: "I love fighting crime"});
    } 
  })
};

exports.createDefaultJobs = createDefaultJobs; 