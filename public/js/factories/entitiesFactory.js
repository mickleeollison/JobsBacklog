angular.module('myApp').factory('entitiesFactory',['$http','url', function($http,url){
    return{
        getResponses: function(){
            return $http.get(url+'responses');
        },
        
        getAppliedTypes: function(id){
            return $http.get(url+'appliedTypes/');
        },
    	
        getJobs: function(){
            return $http.get(url+'jobs');
        },
        
        getJob: function(id){
            return $http.get(url+'jobs/'+id);
        },
        
        deleteJob: function(id){
            return $http.delete(url+'jobs/' + id);
        },
        
    	postJob: function(job){
    		return $http.post(url+"jobs", job)
    	},
    	
    	putJob: function(job, id){
    		return $http.put(url+"jobs/"+id, job)
    	}
    }
}])