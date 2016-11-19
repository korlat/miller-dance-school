'use strict';

angular.module('myApp.gallery', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/gallery', {
            templateUrl: 'app/gallery/gallery.html',
            controller: 'GalleryCtrl'
        });
    }])

    .controller('GalleryCtrl', [function () {

    }]);