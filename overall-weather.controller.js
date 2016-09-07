angular
  .module('weatherApp')
  .controller('overallWeatherController', ['$rootScope', '$scope', 'getWeather', function($rootScope, $scope, getWeather){
    
    $rootScope.$watch('location',
      // This is the change listener, called when the value returned from the above function changes
      function(newValue, oldValue){
        if(newValue !== oldValue) 
          getWeather.getByCity(newValue).then(onSuccess, onError);
      }
    );
    
    $rootScope.$watch('coords',
      // This is the change listener, called when the value returned from the above function changes
      function(newValue, oldValue){
        if(newValue !== oldValue)
          getWeather.getByLatLong(newValue).then(onSuccess, onError);
      }
    );
    
    function onSuccess(result){
      $scope.weather = result.data;
    }
    
    function onError(errorInfo){
      $scope.error = "HTTP GET getWeatherBy*() error!!"+errorInfo;
    }
  }])
  .factory('getWeather', ['$http', function($http){
    var apiKey = '72d23b3c800a7b6fd4b9a7c523197e6f';
    
    function getByCity(location){
      return $http.get('http://api.openweathermap.org/data/2.5/weather?APPID='+apiKey+'&q='+location+'&units=imperial');
    }
    
    function getByLatLong(coords){
      return $http.get('http://api.openweathermap.org/data/2.5/weather?APPID='+apiKey+'&lat='+coords.latitude+'&lon='+coords.longitude+'&units=imperial');
    }
    
    return{
      getByCity : getByCity,
      getByLatLong : getByLatLong
    }
  }]);