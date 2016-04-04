'use strict';

export default class HomeController {

    constructor($window, toaster, uiGmapGoogleMapApi, resolvedUserMarker, resolvedStores, StoresService, resolvedMarkers, StarredStoreService) {
    	this.userMarker = resolvedUserMarker;
        this.markers = resolvedMarkers;
        this.markers.push(resolvedUserMarker);
    	this.stores = resolvedStores;
    	this.centerMap = angular.copy(resolvedUserMarker);
        this.StoresService = StoresService;
        this.StarredStoreService = StarredStoreService;
    }

    openModal(marker) {
    	marker.options.visible = marker.options.visible;
    }

    closeModal(marker) {
    	marker.options.visible = false;
    }

    centerStore(storeId) {
        const store = this.markers.find(function(marker) {
            return marker.$id === storeId;
        });
        this.centerMap.coords = angular.copy(store.coords);
    }

    toggleStarredStore(id) {
        this.StarredStoreService.updateStarredStore(id);
    }

}

HomeController.$inject = ['$window', 'toaster', 'uiGmapGoogleMapApi', 'resolvedUserMarker', 'resolvedStores', 'StoresService', 'resolvedMarkers', 'StarredStoreService'];