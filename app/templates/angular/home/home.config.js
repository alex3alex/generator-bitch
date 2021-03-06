angular
  .module('<%= applicationSlug %>')
  .config(homeConfig);

<% if (angularRoute === 'uiRouter') { %>function homeConfig($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'templates/home.template.html',
    controller: 'HomeController',
    controllerAs: 'homeController',
  });
}<% } %><% if (angularRoute === 'ngRoute') { %>function homeConfig($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'templates/home.template.html',
    controller: 'HomeController',
    controllerAs: 'homeController',
  });
}<% } %>
