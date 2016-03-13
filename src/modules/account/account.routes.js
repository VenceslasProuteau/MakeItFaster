'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('app.account', {
            url: '/account',            
            data: {
                breadcrumbTitle: 'Mon compte'
            },
            views: {
                'actions@app': {
                    template: require('./actions.tpl.html'),
                    controller: 'AccountController',
                    controllerAs: 'accountCtrl'
                },
                'content@app': {
                    template: require('./account.tpl.html'),
                    controller: 'AccountController',
                    controllerAs: 'accountCtrl'
                }
            }
        })
}

