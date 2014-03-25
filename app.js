app = window.app = angular.module('contacts', ['ui.router'])

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    // $locationProvider.hashPrefix('!');

    $stateProvider
        .state('contacts', {
            abstract: true,
            url: '/contacts',
            templateUrl: 'contacts.html'
        }).state('contacts.list', {
            url: '/list',
            views: {
                'tips@contacts': {
                    template: "<h1>Fact: Party People</h1>"
                }
            }
        })
        .state('contacts.details', {
            url: '/details',
            views: {
                'tips@contacts': {
                    template: "<h1>Fact: Tears it up on the dancefloor!</h1>"
                }
            }
        })
    $urlRouterProvider.otherwise('/beer/list')
    console.log("wow")
});

app.controller('ContactsController', function ($scope) {
    $scope.showSideBar = true;
    $scope.listStateName = 'contacts.list';
    $scope.detailsStateName = 'contacts.details';

    $scope.myCurrentState = $scope.listStateName;

    $scope.changeState = function (toState, toParams) {
        $scope.myCurrentState = toState.name;
        if (toState.name === 'contacts.list') {
            $scope.showSideBar = true;
        }
        else {
            $scope.showSideBar = false;
        }
    }

    $scope.toggleSideBar = function () {
        $scope.showSideBar = $scope.showSideBar ? false : true;
    }

    var unListen = $scope.$on('$stateChangeSuccess',
        function (event, toState, toParams, fromState, fromParams) {
            $scope.changeState(toState, toParams)
            console.log("changestate", toState)
        }
    )
    $scope.$on('$destroy', unListen)
});

app.controller('ContactsListController', function ($scope) {
    $scope.contacts = ['Bob', 'Ann', 'Peter'];
});
app.controller('ContactDetailsController', function ($scope) {
    $scope.contact = {name: 'Ann', city: 'San Diego, CA'};
});
app.controller('ContactSidebarController', function ($scope) {
    $scope.header = 'Contacts';
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
