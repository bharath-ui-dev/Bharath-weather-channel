angular
  .module('weatherApp')
  .controller('dailyWeatherController', ['$rootScope','$scope', 'getDailyWeather', function($rootScope, $scope, getDailyWeather){
    
    // if($rootScope.location !== undefined)
    //   getHourlyWeatherByCity($rootScope.location);
    // else if($rootScope.coords !== undefined)
    //   getHourlyWeatherByLatLong($rootScope.coords);
    
    $rootScope.$watch('location',
      // This is the change listener, called when the value returned from the above function changes
      function(newValue, oldValue){
        if(newValue !== oldValue) 
          getDailyWeather.getByCity(newValue).then(onSuccess, onError);
      }
    );
    
    $rootScope.$watch('coords',
      // This is the change listener, called when the value returned from the above function changes
      function(newValue, oldValue){
        if(newValue !== oldValue)
          getDailyWeather.getByLatLong(newValue).then(onSuccess, onError);
      }
    );
    
    function onSuccess(result){
      $scope.weather = result.data;
      $scope.weather.list.forEach(obj => {obj.dt = obj.dt*1000});
    }
    
    function onError(errorInfo){
      $scope.error = "HTTP GET getDailyWeather() error!!"+errorInfo;
    }
    
  }])
  .factory('getDailyWeather', ['$http', function($http){
    var apiKey = '72d23b3c800a7b6fd4b9a7c523197e6f';
    
    function getByCity(location){
      return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?APPID='+apiKey+'&q='+location+'&units=imperial');
    }
    
    function getByLatLong(coords){
      return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?APPID='+apiKey+'&lat='+coords.latitude+'&lon='+coords.longitude+'&units=imperial');
    }
    
    return{
      getByCity : getByCity,
      getByLatLong : getByLatLong
    }
  }]);