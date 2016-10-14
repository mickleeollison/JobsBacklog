var Responses = require('mongoose').model('Responses');

exports.getResponses = function(req, res) {
  Responses.find({}).exec(function(err, responses) {
    res.send(responses);
  })
};
