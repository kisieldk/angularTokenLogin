app.factory('clubsService', ['$http','$window', function($http,$window) {
    var url = 'http://footballer.examplewww.com/';
    var clubsFactory = {};


     clubsFactory.getClubs = function() {
         return $http({
				method: 'GET',
				url: url+'football_clubs/',
				headers: {
				  'Content-Type': 'application/json',
				  'authorization': "JWT " +  $window.sessionStorage.getItem('usertoken')
			  }
			});
     };
	
	 return clubsFactory;
}]);

