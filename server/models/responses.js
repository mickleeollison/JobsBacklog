var mongoose = require('mongoose');

var responsesSchema = mongoose.Schema({
  _id: {type: Number},
  response: {type:String}
});

var Responses = mongoose.model('Responses', responsesSchema);

function createDefaultResponses() {
  Responses.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      Responses.create({_id:1, 'response': 'Deied'});
      Responses.create({_id:2, 'response': 'No Respnse'});
      Responses.create({_id:3, 'response': 'Waiting For Further Response'});
      Responses.create({_id:4, 'response': 'Inital Email/Phone Call'});
      Responses.create({_id:5, 'response': 'Setup a Phone Interview'});
      Responses.create({_id:6, 'response': 'Setup an In-Person Interview'});
      Responses.create({_id:7, 'response': 'Completed a Phone Interview'});
      Responses.create({_id:8, 'response': 'Completed an In-Person Interview'});
      Responses.create({_id:9, 'response': 'Waiting on Final Response'});
      Responses.create({_id:10, 'response':'Offerd the Job'});
    }
  })
}; 

exports.responsesSchema = responsesSchema;
exports.createDefaultResponses = createDefaultResponses;