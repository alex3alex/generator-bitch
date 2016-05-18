'use strict';

let angular = require('angular');

angular
  .module('<%= slugify(appName) %>')
  .config(aboutConfig);

<% if (angularRoute === 'uiRouter') { %>function aboutConfig($stateProvider) {
  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.template.html',
      controller: 'AboutController',
      controllerAs: 'aboutController',
    });
}<% } %><% if (angularRoute === 'ngRoute') { %>function aboutConfig($routeProvider) {
  $routeProvider
    .when('/about', {
      templateUrl: 'templates/about.template.html',
      controller: 'AboutController',
      controllerAs: 'aboutController',
    });
}<% } %>
