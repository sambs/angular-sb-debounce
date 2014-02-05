Usage
=====

angular.module('app', ['debounce'])

  .controller('Controller', ['$scope', 'debounce', function (scope, debounce) {

      scope.lookupSuggestions = debounce(function (val) {
        // do something expensive or slow...
      }, 250);
  }]);


Returns a function, that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for "wait" milliseconds. If `immediate` is passed, trigger the function on the leading edge, instead of the trailing.

See: http://stackoverflow.com/questions/13320015/how-to-write-a-debounce-service-in-angularjs/13320016#13320016
... with confusing promises code removed.

