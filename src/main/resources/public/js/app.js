/**
 * Created by Marek on 06.06.2016.
 */
var app = angular.module("app",[]);

app.controller("AppCtrl",function($scope,$http) {
    var app = this;
    
    
    $scope.execute= function () {
        $http({
            url: '../query/select',
            method: "POST",
            data: { 'queryText' : $scope.queryText }
        })
            .then(function(response) {
                    $scope.queryResult = response.data;
                    console.log($scope.queryResult);
                },
                function(response) {
                    console.log('lipa');
                    console.log(response);
                });
    }

});
