angular
		.module('myApp')
		.controller(
				'jobsCtrl',
				[
						'$scope',
						'$compile',
						'$element',
						'entitiesFactory',
						'toastr',
						function($scope, $compile, $element, entitiesFactory,
								toastr) {
							$scope.adding = false;
							$scope.updating = false;
							$scope.deleting = false;
							$scope.viewing = true;
							$scope.addAppliedDate = false;
							$scope.addResponseDate = false;
							$scope.dateAdded;
							$scope.dateExpires;
							$scope.position;
							$scope.company;
							$scope.location;
							$scope.comment;
							$scope.appliedId;
							$scope.applied;
							$scope.responseId;
							$scope.response;
							$scope.dateApplied;
							$scope.dateResponded;
							$scope.dateAddedU;
							$scope.dateExpiresU;
							$scope.positionU;
							$scope.companyU;
							$scope.locationU;
							$scope.commentU;
							$scope.appliedIdU;
							$scope.appliedU;
							$scope.responseIdU;
							$scope.responseU;
							$scope.dateAppliedU;
							$scope.dateRespondedU;
							$scope.idU;
							$scope.jobSelected;
							$scope.appliedShow;
							$scope.respondedShow;

							$scope.addResponseDateField = function(){
								if($scope.responseId > 2 || $scope.responseIdU > 2){
									$scope.addResponseDate  = true;
								}
								else{
									$scope.addResponseDate = false;
								}
							}
							$scope.addAppliedDateField = function(){
								if($scope.appliedId > 2 || $scope.appliedIdU > 2){
									$scope.addAppliedDate = true;
								}
								else{
									$scope.addAppliedDate = false;
								}
							}

							$scope.add = function() {
								$scope.adding = true;
								$scope.updating = false;
								$scope.deleting = false;
								$scope.viewing = false;
							}

							$scope.update = function(id) {
								$scope.jobSelected = id;
								$scope.adding = false;
								$scope.updating = true;
								$scope.deleting = false;
								$scope.viewing = false;
								setJob(id);
							}

							$scope.remove = function() {
								$scope.adding = false;
								$scope.updating = false;
								$scope.deleting = true;
								$scope.viewing = false;
							}

							$scope.view = function() {
								$scope.adding = false;
								$scope.updating = false;
								$scope.deleting = false;
								$scope.viewing = true;
							}

							$scope.getJobs = function() {
								entitiesFactory.getJobs().then(
										function(success) {
											$scope.jobs = success.data;
										}, function(error) {
											$scope.error = error;
										});
							}
							$scope.jobs = $scope.getJobs();

							$scope.getAppliedTypes = function() {
								entitiesFactory.getAppliedTypes().then(
										function(success) {
											$scope.appliedTypes = success.data;
										}, function(error) {
											$scope.error = error;
                                            console.log("error in getting entities");
										});
							}
                            $scope.appliedTypes = $scope.getAppliedTypes();

							$scope.getResponses = function() {
								entitiesFactory.getResponses().then(
										function(success) {
											$scope.responses = success.data;
										}, function(error) {
											$scope.error = error;
                                            console.log("error in getting entities");
										});
							}
							$scope.responses = $scope.getResponses();

							$scope.deleteJob = function(id) {
								var answer = confirm("Are you sure you want to remove this job")
								if (answer){
									entitiesFactory
										.deleteJob(id)
										.then(
												function(success) {
													$scope.getJobs();
													toastr.success('Success','Job has been Removed');
													$scope.clearForm();
													$scope.view();
												},
												function(error) {
													$scope.error = error;
												});
								}
							}

							$scope.clearForm = function() {
								$scope.dateAdded = '';
								$scope.dateExpires = '';
								$scope.position = '';
								$scope.company = '';
								$scope.location = '';
								$scope.comment = '';
								$scope.appliedId = '';
								$scope.applied = '';
								$scope.responseId = '';
								$scope.response = '';
								$scope.appliedDate = '';
								$scope.dateResponded = '';
								$scope.dateAddedU = '';
								$scope.dateExpiresU = '';
								$scope.positionU = '';
								$scope.companyU = '';
								$scope.locationU = '';
								$scope.commentU = '';
								$scope.appliedIdU = '';
								$scope.appliedU = '';
								$scope.responseIdU = '';
								$scope.responseU = '';
								$scope.appliedDateU = '';
								$scope.dateRespondedU = '';
								$scope.selected = '';
								$scope.addAppliedDateField = false;
								$scope.addResponseDateField = false;
								$scope.respondedShow ='';
								$scope.appliedShow = '';
							}

							$scope.postJob = function() {
								$scope.job = {};
								$scope.job.dateExpires = $scope.dateExpires;
								$scope.job.dateResponded = $scope.dateResponded;
								$scope.job.dateApplied = $scope.dateApplied;
								$scope.job.position = $scope.position;
								$scope.job.company = $scope.company;
								$scope.job.location = $scope.location;
								$scope.job.comment = $scope.comment;
								$scope.job.applied = $scope.appliedId;
								$scope.job.response = $scope.responseId;
								entitiesFactory.postJob($scope.job).then(
										function(success) {
											console.log('success');
											$scope.getJobs();
											$scope.clearForm();
											toastr.success('Success','Job has been Added');
											$scope.view();
										}, function(error) {
											console.log('success');
											$scope.error = error;
										});
							}

							$scope.putJob = function(id) {
								$scope.job = {};
								$scope.job.position = $scope.positionU;
								$scope.job.location = $scope.locationU;
								$scope.job.company = $scope.companyU;
								$scope.job.comment = $scope.commentU;
								$scope.job.applied = $scope.appliedIdU;
								$scope.job.response = $scope.responseIdU;
								$scope.job.dateAdded = $scope.dateAddedU;
								$scope.job.dateExpires = $scope.dateExpiresU;
								$scope.job.dateApplied = $scope.dateAppliedU;
								$scope.job.dateResponded = $scope.dateRespondedU;
								if($scope.addAppliedDate == false) 
									$scope.job.dateApplied = null;
								if($scope.addResponseDate == false)
									$scope.job.dateResponded = null;
								entitiesFactory.putJob(
										$scope.job, id).then(
										function(success) {
											$scope.getJobs();
											$scope.clearForm();
											toastr.success('Success','Job has been Updated');
											$scope.view();
										}, function(error) {
											$scope.error = error;
										});
							}

							var setJob = function(id) {
								entitiesFactory
										.getJob(id)
										.then(
												function(success) {
													$scope.job = success.data;
													$scope.idU = $scope.job._id;
													$scope.positionU = $scope.job.position;
													$scope.companyU = $scope.job.company;
													$scope.locationU = $scope.job.location;
													$scope.commentU = $scope.job.comment;
													$scope.appliedU = $scope.job.applied;
													$scope.dateAppliedU = $scope.job.dateApplied;
													$scope.responseU = $scope.job.response;
													$scope.dateRespondedU = $scope.job.dateResponded;
													$scope.dateExpiresU = $scope.job.dateExpires;
													$scope.appliedShow = $scope.job.applied.applied + " " + $scope.job.dateApplied;
													$scope.respondedShow = $scope.job.response.response + " " + $scope.job.dateResponded;
												},
												function(error) {
													$scope.goodError = error;
												});
							}
		

						} ]);