app.factory('userService', ['$http', function($http) {
    var url = 'http://footballer.examplewww.com/';
    var userFactory = {};

    userFactory.registerUser = function () {
        return $http.get(urlBase);
    };

    userFactory.getToken = function(authData) {
        return $http({
                data : angular.toJson(authData),
                method: 'POST',
                url: url +'auth/',
                headers: {'Access-Control-Allow-Origin' : '*',
				'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
				'Content-Type': 'application/json',
				'Accept': 'application/json'}
            });
    };
	
	 return userFactory;
}]);

