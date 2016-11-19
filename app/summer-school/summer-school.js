'use strict';

angular.module('myApp.summer-school', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/summer-school', {
            templateUrl: 'app/summer-school/summer-school.html',
            controller: 'SummerSchoolCtrl'
        });
    }])

    .controller('SummerSchoolCtrl', [function () {

    }]);