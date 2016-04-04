'use strict';

import indexTemplate from './index.tpl.html';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('app.store', {
            url: '/store/:storeId',
            data: {
                breadcrumbTitle: 'Page produits',
                hasActions: true
            },
            views: {
                'content@app': {
                    template: indexTemplate,
                    controller: 'StoreController',
                    controllerAs: 'storeCtrl'
                }
            },
            resolve: {
                resolvedStore: function(StoreService, $stateParams) {
                    return StoreService.get($stateParams.storeId);

                    resolvedStore.$inject = ['StoreService', '$stateParams'];
                }
            }
        });
}
