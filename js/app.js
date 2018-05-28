(function(){

    var app = angular.module('myPortfolio', ['ngRoute']);

    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/omnie', {
                templateUrl: 'views/omnie.html',
                label: 'O mnie'
            })
            .when('/umiejetnosci', {
                templateUrl: 'views/umiejetnosci.html',
                label: 'Umiejetnosci'
            })
            .when('/projekty', {
                templateUrl: 'views/projekty.html',
                label: 'Projekty'
            })
            .when('/social', {
                templateUrl: 'views/social.html',
                label: 'Social'
            })  			
            .when('/kontakt', {
                templateUrl: 'views/kontakt.html',
                label: 'Kontakt'
            })            
            .otherwise({
                redirectTo: '/omnie'
            })
        ;

        $locationProvider
            .html5Mode(true)
            .hashPrefix('');

    }]);




})();