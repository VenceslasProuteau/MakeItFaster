'use strict';

routes.$inject = ['$stateProvider', 'uiGmapGoogleMapApiProvider'];

export default function routes($stateProvider, uiGmapGoogleMapApiProvider) {
    $stateProvider
        .state('app.home', {
            url: '/home',
            data: {
            	breadcrumbTitle: 'Accueil',
              hasActions: true
            },
            views: {
              'content@app': {
                template: require('./home.tpl.html'),
                controller: 'HomeController',
                controllerAs: 'homeCtrl'
              },
              'actions@app': {
                  template: require('./actions.tpl.html'),
                  controller: 'HomeController',
                  controllerAs: 'homeCtrl'
              },
            }
        });

        uiGmapGoogleMapApiProvider.configure({
           key: 'AIzaSyCF0cvDpW8VDeyYZrajuER1GTbxdYOLJss',
           v: '3.20'
       });
}
