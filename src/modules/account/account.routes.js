'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('app.account', {
            url: '/account',
            template: require('./account.tpl.html'),
            controller: 'AccountController',
            controllerAs: 'accountCtrl',
            resolve: {
            	resolvedUser: function(UserService) {
            		return UserService.auth.$requireAuth();            			
            	}
            }
        })
}

