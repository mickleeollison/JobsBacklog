var mongoose = require('mongoose');

var appliedTypesSchema = mongoose.Schema({
  _id: {type: Number},
  applied: {type:String}
});

var AppliedTypes = mongoose.model('AppliedTypes', appliedTypesSchema);

function createDefaultAppliedTypes() {
  AppliedTypes.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      AppliedTypes.create({_id:1, 'applied': 'Can\'t'});
      AppliedTypes.create({_id:2,'applied': 'No'});
      AppliedTypes.create({_id:3,'applied': 'Yes'});
      AppliedTypes.create({_id:4,'applied': 'In-Process'});
    }
  })
};
exports.appliedTypesSchema = appliedTypesSchema;
exports.createDefaultAppliedTypes = createDefaultAppliedTypes;