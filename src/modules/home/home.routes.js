'use strict';

import homeTemplate from './home.tpl.html';
import homeActionsTemplate from './actions.tpl.html';

import {UserMarkerObject} from '../../components/UserMarkerObject';

routes.$inject = ['$stateProvider', 'uiGmapGoogleMapApiProvider'];

export default function routes($stateProvider, uiGmapGoogleMapApiProvider) {
    $stateProvider
        .state('app.home', {
            url: '/home',
            data: {
                breadcrumbTitle: 'Accueil'/*,
                hasActions: true*/
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
                }
            },
            resolve: {
                resolvedUserMarker: function (GeolocationService) {
                    return GeolocationService.getPosition()
                        .then((userPosition) => {
                            return new UserMarkerObject(userPosition);
                        })
                        .catch((error) => console.log(error));

                    resolvedUserMarker.$inject = ['GeolocationService'];
                },
                resolvedStores: function(StoresService) {
                    return StoresService.get();

                    resolvedStores.$inject = ['StoresService'];
                },
                resolvedMarkers: function(MarkersService) {
                    return MarkersService.get();
                    
                    resolvedMarkers.$inject = ['MarkersService'];
                }
            }
        });

        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyCF0cvDpW8VDeyYZrajuER1GTbxdYOLJss',
            libraries: 'places'
        });
}
