app.module('test',[])
  .controller('testCtrl', testCtrl)
  .directive('fly', flyDirective);
  
function testCtrl ($scope) {
  
  
}

function flyDirective () {
  return {
    restrict: 'E', /* [2] */
    replace: 'true',
    template: (
      '<div class="fly-response">' +
        '<img ng-src="http://www.orvis.com/orvis_assets/prodimg/0338NW.jpg"/>' +
      '</div>'
    )
  };
}