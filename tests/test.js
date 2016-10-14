var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/jobbacklog_test'); 
appliedTypesModel = require('./../server/models/appliedTypes'); 
var spy = sinon.spy();

var appliedTypes = require('./../server/controllers/appliedTypes');

describe("testing the appliedTypes controller", function() {
    describe("GET Users", function() {

    beforeEach(function(done){    
        //add some test data    
        appliedTypesModel.createDefaultAppliedTypes();
        done();
    });  

        it("should be called once", function() {
            var ctrlSpy = sinon.spy(appliedTypes,'getAppliedTypes');
            appliedTypes.getAppliedTypes(); 
            expect(ctrlSpy.callCount).to.equal(1);
        
        }); 

    });     

});



