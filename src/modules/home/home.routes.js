'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('app.home', {
            url: '/home',
            template: require('./home.tpl.html'),
            controller: 'HomeController',
            controllerAs: 'homeCtrl',
            resolve: {
            	resolvedUser: resolvedUser
            }
        });
}

function resolvedUser(UserService) {
    return UserService.$waitForAuth();
}

resolvedUser.$inject = ['UserService'];
