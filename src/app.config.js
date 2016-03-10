'use strict';

routing.$inject = ['$urlRouterProvider'];

export default function routing($urlRouterProvider) {

    $urlRouterProvider
        .when('', '/login')
        .otherwise('/login');
}
