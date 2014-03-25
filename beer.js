app = window.app;
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('beer', {
            url: '/beer',
            templateUrl: 'beer.html'
        })
        .state('beer.list', {
            url: '/list',
            templateUrl: 'beer_list.html'
        })
        .state('beer.details', {
            url: '/details',
            templateUrl: 'beer_details.html'
        })
        .state('beer.guide', {
            url: '/guide',
            templateUrl: 'beer_guide.html'
        })
});

app.controller('BeerController', function ($scope) {
    $scope.tips = 'Everyone loves beer!';
    $scope.setTips = function (tips) {
        $scope.tips = tips;
    }
});

app.controller('BeerListController', function ($scope) {
    $scope.setTips('Here are some popular beers.');
});

app.controller('BeerDetailsController', function ($scope) {
    $scope.setTips('The US no longer owns all the beer!');
});
