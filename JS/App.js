var henryIsBullied = angular.module('henryIsBullied', ['ngRoute']);

henryIsBullied.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/main' ,{
        templateUrl: 'Views/Main.html',
        controller: 'mainController'
    })
    .when('/allAttacks',{
        templateUrl: 'Views/AllAttacks.html',
        controller: 'allAttacksController'
    })
    .otherwise({
        redirectTo: '/main'
    })    
}]);

henryIsBullied.controller('mainController', function($scope){

});

henryIsBullied.controller('allAttacksController', function($scope){

});