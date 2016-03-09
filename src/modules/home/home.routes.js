'use strict';

routes.$inject = ['$stateProvider', 'uiGmapGoogleMapApiProvider'];

export default function routes($stateProvider, uiGmapGoogleMapApiProvider) {
    $stateProvider
        .state('app.home', {
            url: '/home',
            template: require('./home.tpl.html'),
            controller: 'HomeController',
            controllerAs: 'homeCtrl',
            data: {
            	breadcrumbTitle: 'Accueil'
            }
        });

        uiGmapGoogleMapApiProvider.configure({
           key: 'AIzaSyCF0cvDpW8VDeyYZrajuER1GTbxdYOLJss',
           v: '3.20'
       });
}
