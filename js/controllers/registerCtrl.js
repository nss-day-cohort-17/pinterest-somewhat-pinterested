app.controller("RegisterCtrl", function($scope, $location, AuthFactory){
  $scope.login = () =>  AuthFactory
  .login($scope.email, $scope.password)
    .then(() => location.url("/"));

  });
