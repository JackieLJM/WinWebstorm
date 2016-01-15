/**
 * Created by LJM on 2015/8/22.
 */
var mod = angular.module("myApp", []);

mod.controller("MyController", function ($scope) {
    $scope.clock = {
        now: new Date()
    };
    var updateClock = function () {
        $scope.clock.now = new Date();
    };
    setInterval(function () {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
});

angular.module("emailParser", []).factory("EmailParser", ["$interpolate", function ($interpolate) {
    return {
        parse: function (text, context) {
            var template = $interpolate(text);
            return template(context);
        }
    };
}]);

mod("myApp", ["emailParser"]).controller("MyController1",  ["$scope", "emailParser", function ($scope, EmailParser) {
    $scope.$watch("myemail", function (body) {
//        var template = $interpolate(body);
        if (body) {
            $scope.pre = EmailParser.parse(body, {to: $scope.to});
        }
    });
}]);