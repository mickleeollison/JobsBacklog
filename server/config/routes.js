var express = require('express'),
    router = express.Router(),
	jobs = require('./../controllers/jobs'),
    appliedTypes = require('./../controllers/appliedTypes'),
    responses = require('./../controllers/responses'),
	passport = require('passport');

module.exports = function(app, config) {
    app.use(function(req, res, next) {
        if (!req.user)
            res.header('Cache-Control', 'no-cache');
        next();
    });
	app.use(express.static(config.rootPath + '/public'));
	app.get('/index', isLoggedIn, function(req,res){
		res.sendfile(config.rootPath + '/public/indexpage.html');
        console.log(req.user.local.email);
	});
    app.get('/',function(req,res){
		res.sendfile(config.rootPath + '/public/loginpage.html');
	});
	app.get('/login',function(req,res){
		res.sendfile(config.rootPath + '/public/loginpage.html');
	});
	app.get('/register',function(req,res){
		res.sendfile(config.rootPath + '/public/registerPage.html');
	});
	app.get('/logout', function(req, res) {
        console.log(req.user);
        req.logout();
        console.log(req.user);
        res.redirect('/login');
    });
	 
	app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/login', 
        failureRedirect : '/register',
        failureFlash : true 
    }));
	
	app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/index', 
        failureRedirect : '/login', 
        failureFlash : true 
    }));

		
    app.get('/appliedTypes', appliedTypes.getAppliedTypes);
    
    app.get('/responses', responses.getResponses);
    
    app.get('/jobs', jobs.getJobs);
	app.get('/jobs/:id', jobs.getJob);
    app.post('/jobs', jobs.createJob);
    app.put('/jobs/:id', jobs.updateJob);
    app.delete('/jobs/:id', jobs.removeJob);
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()){
        return next();
	}
    res.redirect('/login');
}