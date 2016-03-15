'use strict';

import homeTemplate from './home.tpl.html';
import homeActionsTemplate from './actions.tpl.html';

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
                    template: homeTemplate,
                    controller: 'HomeController',
                    controllerAs: 'homeCtrl'
                },
                'actions@app': {
                    template: homeActionsTemplate,
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
