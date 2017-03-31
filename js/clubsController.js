app.controller('ClubsController', ['$scope','clubsService','$window', function ($scope,clubsService,$window) {
   
   $scope.status = '';
   $scope.clubs;
	
   $scope.getMyClubs = function () {	
		 
        clubsService.getClubs()
            .then(function (response) {
               $scope.clubs = response.data; 
						   
            }, function(error) {
                 $scope.status = error.message;
             });
     };
   
}]);