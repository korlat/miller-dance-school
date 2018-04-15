'use strict';

angular.module('myApp.classes', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/classes', {
            templateUrl: 'app/classes/classes.html',
            controller: 'ClassesCtrl'
        });
    }])

    .controller('ClassesCtrl', [function () {
        var self = this;

        self.classesData = [{
            day: 'Tuesday',
            classes: [{
                time: '16:30 - 17:15',
                class: 'G3, G4, (G5) Tap',
                teacher: 'Miss Katie',
                classColour:'danger'
            }, {
                time: '17:15 - 18:00',
                class: '(G4), G5, G6/Inter Tap',
                teacher: 'Miss Katie',
                classColour:'danger'
            },{
                time: '18:00 - 19:00',
                class: 'G6/Inter Ballet',
                teacher: 'Miss Suzie / Miss Katie',
                classColour:'success'
            },{
                time: '19:00 - 19:30',
                class: 'Pointe - Adv - Selected Only Ballet',
                teacher: 'Miss Suzie / Miss Katie',
                classColour:'success'
            },{
                time: '19:30 - 20:30',
                class: 'Singing',
                teacher: 'Mr Matt',
                classColour:'info'
            }]
        }, {
            day: 'Wednesday',
            classes: [{
                time: '16:30 - 17:00',
                class: 'G2 Modern Jazz',
                teacher: 'Miss Katie',
                classColour:'danger'
            },{
                time: '17:00 - 17:45',
                class: 'G3, G4, (G5) Modern Jazz',
                teacher: 'Miss Katie',
                classColour:'danger'
            },{
                time: '17:45 - 18:30',
                class: 'G5, G6/Inter Modern Jazz',
                teacher: 'Miss Katie',
                classColour:'danger'
            },{
                time: '18:30 - 19:00',
                class: 'JNR Musical Theatre',
                teacher: 'Mr Max',
                classColour:'info'
            },{
                time: '19:00 - 20:00',
                class: 'SNR Musical Theatre',
                teacher: 'Mr Max',
                classColour:'info'
            },{
                time: '20:00 - 21:00',
                class: 'Commercial Jazz',
                teacher: 'Mr Max',
                classColour:'info'
            }]
        }, {
            day: 'Thursday',
            classes: [{
                time: '16:30 - 17:00',
                class: 'G2 Tap',
                teacher: 'Miss Katie',
                classColour:'danger'
            },{
                time: '17:00 - 17:30',
                class: 'G2 Ballet',
                teacher: 'Miss Katie',
                classColour:'danger'
            },{
                time: '17:30 - 18:15',
                class: 'G3, G4, G5 Ballet',
                teacher: 'Miss Katie',
                classColour:'danger'
            },{
                time: '18:15 - 19:00',
                class: 'G3, G4, G5 Ballet',
                teacher: 'Mr Max',
                classColour:'info'
            },{
                time: '19:00 - 19:45',
                class: 'Adult Beginners Tap',
                teacher: 'Miss Katie / Sonia',
                classColour:'danger'
            }]
        }, {
            day: 'Friday',
            classes: [{
                time: '16:30 - 17:00',
                class: 'Show',
                teacher: 'Miss Katie',
                classColour:'danger'
            },{
                time: '17:00 - 17:30',
                class: 'Show',
                teacher: 'Miss Katie',
                classColour:'danger'
            },{
                time: '17:30 - 18:00',
                class: 'Show',
                teacher: 'Miss Katie',
                classColour:'danger'
            }]
        }, {
            day: 'Saturday',
            classes: [{
                time: '0900 - 09:30',
                class: 'Pri/G1 Ballet',
                teacher: 'Miss Katie',
                classColour:'danger'
            },{
                time: '0930 - 10:00',
                class: 'Pri/G1 Modern Jazz',
                teacher: 'Miss Katie',
                classColour:'danger'
            },{
                time: '1000 - 10:30',
                class: 'Pri/G1 Ballet',
                teacher: 'Pri/G1 Tap',
                classColour:'danger'
            }]
        }]
    }]);