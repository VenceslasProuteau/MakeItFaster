'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            views: {
                main: {
                    template: require('./login.tpl.html'),
                    controller: 'LoginController',
                    controllerAs: 'loginCtrl'
                }
            }
        })

        .state('signup', {
        	url: '/signup',
            views: {
                main: {
                    template: require('./login.tpl.html'),
                    controller: 'LoginController',
                    controllerAs: 'loginCtrl'
                }
            }
        })
}

