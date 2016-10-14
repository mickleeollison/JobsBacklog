var AppliedTypes = require('mongoose').model('AppliedTypes');

exports.getAppliedTypes = function(req, res) {
  AppliedTypes.find({}).exec(function(err, appliedTypes) {
    res.send(appliedTypes);
  })
};
