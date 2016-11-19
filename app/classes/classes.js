'use strict';

angular.module('myApp.classes', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/classes', {
            templateUrl: 'app/classes/classes.html',
            controller: 'ClassesCtrl'
        });
    }])

    .controller('ClassesCtrl', [function () {

    }]);