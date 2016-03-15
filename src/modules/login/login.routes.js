'use strict';

import loginTemplate from './login.tpl.html';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            views: {
                main: {
                    template: loginTemplate,
                    controller: 'LoginController',
                    controllerAs: 'loginCtrl'
                }
            }
        })

        .state('signup', {
        	url: '/signup',
            views: {
                main: {
                    template: loginTemplate,
                    controller: 'LoginController',
                    controllerAs: 'loginCtrl'
                }
            }
        })
}

