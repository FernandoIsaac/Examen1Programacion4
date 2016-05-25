angular.module('AngularScaffold.Controllers')
  .controller('HomeController', ['$scope', 'HomeService', '$sessionStorage', function ($scope, HomeService, $sessionStorage) {
    	$scope.title = "Tabla de Ingredientes."
      $scope.exampleObject = {text: "Hola, Dundo"}
      $scope.ingredients = [];
      $scope.ingredient = {};
      $scope.products = [];
      $scope.product={};

      $scope.getIngredients = function(){
        HomeService.GetIngredients().then(function(response){
          $scope.ingredients = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.postIngredients = function(){
        HomeService.PostIngredients($scope.ingredient).then(function(response){
          alert("Posted to Ingredients");
          $scope.GetIngredients();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.deleteIngredients = function(){
	HomeService.DeleteIngredients($scope.ingredient).then(function(response){
	  alert("Ingredient Deleted");
	  $scope.DeleteIngredients();
	 }).catch(function(err){
	  alert(err.data.error + " " + err.data.message);
	 });
	}
     
      $scope.getProducts = function(){
        HomeService.GetProducts().then(function(response){
          $scope.products = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.postProducts = function(){
        HomeService.PostProducts($scope.product).then(function(response){
          alert("Posted to Products");
          $scope.GetProducts();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.deleteProducts = function(){
	HomeService.PostProducts($scope.product).then(function(response){
	  alert("Product Deleted");
	  $scope.DeleteProducts();
	 }).catch(function(err){
	  alert(err.data.error + " " + err.data.message);
	 });
	}

      $scope.isAdmin = function(){

      $scope.isAdmin = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
      }

      $scope.isRegular = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('regular') > -1;
      }

  }]);
