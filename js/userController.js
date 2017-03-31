app.controller('UserController', ['$scope','userService','$window', function ($scope,userService,$window) {
   
  
   $scope.status = '';
   
    $scope.getUserToken = function (dataAuth) {
		
        var authData = {
           	'username':dataAuth.login,
			'password':dataAuth.pass
        };
        userService.getToken(authData)
            .then(function (response) {
				 $window.sessionStorage.setItem('usertoken', response.data.token);
						console.log(response.data.token);
            }, function(error) {
                $scope.status = error.message;
            });
    };
   
}]);