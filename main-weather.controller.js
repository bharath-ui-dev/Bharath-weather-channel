// Code goes here
angular
  .module('weatherApp', [])
  .controller('mainWeatherController', ['$rootScope', '$scope', 'geoLocationService', function($rootScope, $scope, geoLocationService){
    
    geoLocationService.getCurrentPosition().then(onGeoSuccess, onGeoError);
    
    function onGeoSuccess(location){
        $rootScope.coords = location.coords;
    }
    
    function onGeoError(error){
      $scope.error = error;
    }
    
    $scope.getWeather = function(location){
      //getWeatherByCity(location).then(onSuccess, onError);
      $rootScope.location = location;
    }
    
  }])
  .factory('geoLocationService', ['$q', function($q){
    
    function getCurrentPosition() {
      var deferred = $q.defer();
      if (!navigator.geolocation) {
        deferred.reject('Geolocation not supported.');
      } else {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            deferred.resolve(position);
          },
          function (err) {
            deferred.reject(err);
        });
      }
      return deferred.promise;
    }

    return {
      getCurrentPosition: getCurrentPosition
    };
  }]);