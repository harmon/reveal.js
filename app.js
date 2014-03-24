app = angular.module('contacts', ['ui.router'])

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    // $locationProvider.hashPrefix('!');

    $stateProvider
        .state('contacts', {
            abstract: true,
            url: '/contacts',
            templateUrl: 'contacts.html'
        }).state('contacts.list', {
            url: '/list'
        })
        .state('contacts.details', {
            url: '/details'
        })
    $urlRouterProvider.otherwise('/contacts/list')
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
