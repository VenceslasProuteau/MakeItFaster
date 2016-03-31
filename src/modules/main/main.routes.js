'use strict';

import mainIndexTemplate from './index.tpl.html';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('app', {
            abstract: true,
            views: {
                main: {
                    template: mainIndexTemplate,
                    controller: 'MainController',
                    controllerAs: 'mainCtrl'
                }
            },
            resolve: {
                resolvedUser: function(LoginAPI, UserService) {
                    return LoginAPI.firebaseAuthObject.$requireAuth()
                        .then((user) => UserService.getUser(user.uid));

                    resolvedUser.$inject = ['LoginAPI', 'UserService'];
                },
                resolvedStarredStores: function(StarredStoresService) {
                    return StarredStoresService.get();

                    resolvedStarredStores.$inject = ['StarredStoresService'];
                }
            }
        });
}
