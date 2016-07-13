//split to service and controller

var app = angular.module('app', []);
app.controller('PostsCtrl', function ($scope) {
    $scope.posts = [
        {
            username: 'dickeyxxx',
            body: 'Node rules!'
        },
        {
            username: 'jeffdickey',
            body: 'trying out angular.js...'
        }
    ];

    $scope.addPost = function () {
        if ($scope.postBody) {
            $scope.posts.unshift({
                username: 'dickeyxxx',
                body: $scope.postBody
            });
            $scope.postBody = null;
        }
    }
});
app.service('PostsSvc', function ($http) {
    this.fetch = function () {
        return $http.get('/api/posts')
    }
})