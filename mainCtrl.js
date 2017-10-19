var app = angular.module("FishingGame", ["ngRoute"]);

app.controller('mainCtrl', function($scope) {

});

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    .when("/test", {
        templateUrl : "test.html",
        controller : "testCtrl.js"
    })
    .when("/results", {
        templateUrl : "results.html",
        controller : "resultsCtrl.js"
    })
});