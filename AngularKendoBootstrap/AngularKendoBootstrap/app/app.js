'use strict';

angular.module('AngularKendoBootstrapApp', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/home", {
                    controller: "home",
                    templateUrl: "/app/home/home.html"
                })
            .when("/contact", {
                controller: "contact",
                templateUrl: "/app/contact/contact.html"
            })
            .otherwise({ redirectTo: "/home" });
        $locationProvider.html5Mode(true);
}]);