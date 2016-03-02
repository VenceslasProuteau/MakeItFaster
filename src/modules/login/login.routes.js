'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            template: require('./login.tpl.html'),
            controller: 'LoginController',
            controllerAs: 'loginCtrl'
        })

        .state('signup', {
        	url: '/signup',
        	template: require('./login.tpl.html'),
        	controller: 'LoginController',
        	controllerAs: 'loginCtrl'
        })
}

