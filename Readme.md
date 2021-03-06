sbDebounce
==========

[![Build Status](https://travis-ci.org/sambs/angular-sb-debounce.png?branch=master)](https://travis-ci.org/sambs/angular-sb-debounce)

A debounce service for AngularJS.

    var wrapped = sbDebounce(func, wait, immediate);

Return a new function, that, as long as it continues to be invoked, will not trigger the wrapped function. The wrapped function will be called after it stops being called for `wait` milliseconds. If `immediate` is passed, trigger the function on the leading edge, instead of the trailing.

Useful to limit the frequency of calls to an event handler:

    angular.module('app', ['sbDebounce'])
      .controller('Controller', ['$scope', 'sbDebounce', function (scope, debounce) {
        scope.onKeyPress = debounce(function () {
          expensiveSlowFunction();
        }, 250);
      }]);

Licence
-------

Licensed under the MIT License
