angular.module('AngularScaffold.Services').factory('HomeService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000/';
		return {
				GetProducts: function(){
					return $http.get(baseUrl + "v1/products");
				},
				PostProducts: function(payload){
					return $http.post(baseUrl + "v1/product", payload);
				},
				DeleteProducts: function(payload){
					return $http.delete(baseUrl + "v1/product", payload);
				},
				GetIngredients: function(){
					return $http.post(baseUrl + "v1/ingredients");
				},
				PostIngredients: function(payload){
					return $http.post(baseUrl + "v1/ingredient", payload); 
				},
				DeleteIngredients: function(payload){
					return $http.delete(baseUrl + "v1/ingredient", payload);
				}
	    };
}]);
