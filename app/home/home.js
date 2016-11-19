'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'app/home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', [function () {
        var self = this;

        self.navClasses = function () {
            $(".nav").find(".active").removeClass("active");
            var items = $(".nav").find('li');
            items.each(function (idx, value) {
                if ($(value).text() === "Classes") {
                    $(value).addClass("active");
                }
            });
        }
    }]);

