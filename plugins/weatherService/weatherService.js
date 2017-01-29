(function wrapper() {
  'use strict';
  /* global angular */

  var app = angular.module('myapplication.weatherService', [ 'dark-sky' ]);

  configure.$inject = [ 'darkSkyProvider' ];
  app.config(configure);

  function configure(darkSkyProvider) {
    darkSkyProvider.setUnits('si');
    app.darkSkyProvider = darkSkyProvider;
  }

  WeatherService.$inject = [ '$q', 'darkSky', 'c8ySettings' ];
  app.service('weatherService', WeatherService);

  function WeatherService($q, darkSky, c8ySettings) {
    var self = this;
    self.$q = $q;
    self.weather = darkSky;
    self.c8ySettings = c8ySettings;
    self.option = { category: 'darksky', key: 'key', value: ''};
  }

  WeatherService.prototype.load = function load() {
    var self = this;
    return self.$q(function loadOpt(resolve) {
      self.c8ySettings.detail(self.option).then(function setKey(res) {
        self.option.value = res.data.value;
        app.darkSkyProvider.setApiKey(self.option.value);
        resolve(self.option.value);
      }, function initKey() {
        self.c8ySettings.createOption(self.option);
        resolve(self.option.value);
      });
    });
  };

  WeatherService.prototype.save = function save(apiKey) {
    var self = this;
    self.option.value = apiKey;
    self.c8ySettings.updateOption(self.option);
    app.darkSkyProvider.setApiKey(apiKey);
  };
}());
