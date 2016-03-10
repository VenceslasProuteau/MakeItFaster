'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('app', {
            abstract: true,
            views: {
                main: {
                    template: require('./index.tpl.html'),
                    controller: 'MainController',
                    controllerAs: 'mainCtrl'
                }
            },
            resolve: {
                resolvedUser: function(UserService) {
                    return UserService.auth.$requireAuth();
                    resolvedUser.$inject = ['UserService'];
                }
            }
        });
}
