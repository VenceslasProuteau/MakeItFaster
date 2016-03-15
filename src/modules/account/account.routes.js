'use strict';

import accountTemplate from './account.tpl.html';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('app.account', {
            url: '/account',            
            data: {
                breadcrumbTitle: 'Mon compte'
            },
            views: {
                'content@app': {
                    template: accountTemplate,
                    controller: 'AccountController',
                    controllerAs: 'accountCtrl'
                }
            }
        })
}

