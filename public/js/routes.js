(function(){
	angular.module("myApp")
	.config(appConfig)
	.run(['$state', function($state){
		$state.transitionTo('jobs');
	}]);
	
	function appConfig($stateProvider){		       
        var jobs = {
            name:'jobs',
            url:'/jobs',
            templateUrl:'/templates/jobs.html',
            controller: 'jobsCtrl'
        };
        $stateProvider.state(jobs);
	}
})();