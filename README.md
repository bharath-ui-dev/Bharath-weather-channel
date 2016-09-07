# Bharath's weather channel
## About
This Angular 1.5.8 project uses API provided by openweather.org and Geolocation API to provide the current weather and forecast of the browser's location.
The user can optionally type in the location for which the weather will also be loaded.

## Code in action
Run in [Plunker] (http://run.plnkr.co/plunks/4FsF9i)

## Tech stack
* [Angular.js 1.5.8] (http://angularjs.org)
* [Bootstrap CSS and JS 3.3.6] (http://getbootstrap.com)

## Architecture: MVC
* [Geolocation API] (https://dev.w3.org/geo/api/spec-source.html) converted into a promise using $q [service] (https://docs.angularjs.org/api/ng/service/$q) and served via a service [geolocationService] (main-weather.controller.js#L22)
* Location retrieved and shared with other controllers by [MainWeatherController] (main-weather.controller.js) (controller)
* Weather summary controlled by [OverallWeatherController] (overall-weather.controller.js) (model & controller)
* 3-Hour weather data for 3 days by [HourlyWeatherController] (hourly-weather.controller.js) (model & controller)
* 7-day weather data by [DailyWeatherController] (daily-weather.controller.js) (model & controller)
* Entire data in single page in [index.html] (index.html) (view)

## Credits
Code for split table view from [JSFiddle] (http://jsfiddle.net/q8v3obsq/227/)
