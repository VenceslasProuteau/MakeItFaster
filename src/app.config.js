'use strict';

routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {

	$stateProvider
        .state('app', {
            abstract: true,
            views: {
                '@': {
                    template: require('./modules/app/layout.tpl.html'),
                },
                'footer@app': {
                    template: require('./modules/footer/footer.tpl.html')
                },
                'header@app': {
                    template: require('./modules/header/header.tpl.html'),
                    controller: 'HeaderController',
                    controllerAs: 'headerCtrl'                   
                }
            },
            resolve: {
                resolvedUser: function(UserService) {
                    return UserService.auth.$requireAuth()
                        .then((user) => user);

                    resolvedUser.$inject = ['UserService']; 
                
                }
            } 
        });

    $urlRouterProvider
        .when('', '/login')
        .otherwise('/login');
}
