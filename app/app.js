/**
 * Created by vmanthena on 27-Sep-16.
 */

/* App Controllers */

var rememberGameApp = angular.module('rememberGameApp', []);

rememberGameApp.factory('game', function() {
    var tileNames = ['AUDI', 'BMW', 'HONDA', 'FORD', 'SKODA', 'SUZUKI',
        'NISSAN', 'JAGUAR'];
    return new Game(tileNames);
});

rememberGameApp.controller('GameCtrl', function GameCtrl($scope, game) {
    $scope.game = game;
});

rememberGameApp.directive('card', function() {
    return {
        template: '<div class="container">' +
        '<div class="card" ng-class="{flipped: tile.flipped}">' +
        '<img  class="front" ng-src="img/back.jpg">' +
        '<img  class="back" ng-src="img/{{tile.title}}.jpg">' +
        '</div>' +
        '</div>'
    }
});