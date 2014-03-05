/* global angular */

angular.module('sbDebounce', [])

  .factory('sbDebounce', ['$timeout', function ($timeout) {

    return function (func, wait, immediate) {
      var timeout;
      return function () {
        var context = this, args = arguments;
        var later = function () {
          timeout = null;
          if(!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        if (timeout) $timeout.cancel(timeout);
        timeout = $timeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };
  }]);
