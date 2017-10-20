var app = angular.module("FishingGame", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    .when("/test", {
        templateUrl : "test.html",
        controller : "testCtrl"
    })
    .when("/results", {
        templateUrl : "results.html",
        controller : "resultsCtrl"
    })
});

app.controller('mainCtrl', function($scope) {

});

app.controller('testCtrl', function($scope) {
    $scope.bugType = '';
    $scope.flyType = '';
    $scope.fishCaught = 0;
    $scope.castCounter = 0;

    $scope.flyList = [
      {image: 'http://www.orvis.com/orvis_assets/prodimg/7T50SF3golden.jpg', name: 'stonefly'},
      {image: 'http://www.flyfishinginsidernewsletter.com/flyfishusa/flies/5030.jpg', name: 'caddis'},
      {image: 'http://www.orvis.com/orvis_assets/prodimg/0338NW.jpg', name: 'mayfly'},
      {image: 'https://s3-us-west-2.amazonaws.com/fly-index/images/r3v81624-5750-1478928452.jpg', name: 'ant'},
      {image: 'http://www.orvis.com/orvis_assets/prodimg/0472L2W_lg.jpg', name: 'scud'}
    ];

    $scope.bugList = [
      {image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/SteinfliegenLarve2.JPG', name: 'stonefly'},
      {image: 'https://farm6.static.flickr.com/5542/30354436550_6dbbbfe95a_b.jpg', name: 'caddis'},
      {image: 'http://lh4.ggpht.com/_tLjlL5zsmAc/SxN-gUgLTtI/AAAAAAAABJM/QWSyu8encWU/Ephemeroptera%2001%20Side%2003.jpg', name: 'mayfly'},
      {image: 'https://c1.staticflickr.com/1/220/521327318_111d44bb8b_b.jpg', name: 'ant'},
      {image: 'https://www.headhuntersflyshop.com/wp-content/uploads/2016/07/bugs_7_8_16-18.jpg', name: 'scud'}
    ];

    $scope.getRandomBug = function() {
      console.log('running getRandomBug')
      var bugNum = Math.floor(Math.random() * 4);
      console.log(bugNum);
      var bugImage = document.getElementbyId('bug-image');
      bugImage.src = $scope.bugList[bugNum].image;
      $scope.bugType = $scope.buglist[bugNum].name;
    }

    $scope.onChooseFly = function(flyType) {
      console.log("running onChooseFly");
      if ($scope.bugType === flyType) {
        $scope.fishCaught += 1;
        $scope.resetQuestion();
      } else {
        $scope.resetQuestion();
      }
    }

    $scope.resetQuestion = function() {
      $scope.castCounter += 1;
      if($scope.castCounter === 10) {
        //route to results
      } else {
        getRandomBug();
      }
    }
});

app.controller('resultsCtrl', function($scope) {
    if($scope.numFish === 10) {
      $scope.skillLevel = 'MASTER';
      $scope.message = 'Fish tremble when you enter the river. It is so easy for you to fool them that they basically jump into your net before realising they have been had.'
    } else if ($scope.fishCaught < 10 && $scope.fishCaught >= 8){
      $scope.skillLevel = 'amazing';
      $scope.message = 'Get on the river and keep that rod tip bent!'
    } else if ($scope.fishCaught < 8  && $scope.fishCaught >= 5){
      $scope.skillLevel = 'good';
      $scope.message = 'Get out and keep it up, you will get even better!'
    } else if ($scope.fishCaught < 5 && $scope.fishCaught >= 3){
      $scope.skillLevel = 'decent';
      $scope.message = 'You are getting it, keep trying!'
    } else if ($scope.fishCaught < 3 && $scope.fishCaught >= 1){
      $scope.skillLevel = 'beginner';
      $scope.message = 'Practice makes perfect. You have a ways to go!'
    } else {
      $scope.skillLevel = 'horrible';
      $scope.message = 'Maybe you should try another hobby.'
    }
    resetGame();

    function resetGame() {
      $scope.castCounter = 0;
    }
});

app.directive('fly', function flyDirective () {
  return {
    template: (
      '<div class="fly-response row">' +
        '<img class="test-image" ng-click="onChooseFly(fly.name)" ng-src= "{{fly.image}}"/>' +
      '</div>'
    )
};
});

