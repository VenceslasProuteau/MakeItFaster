'use strict';

export default class StoreService {

    constructor($q, $firebaseArray, firebaseDataService, StoresService) {
    	this.$firebaseArray = $firebaseArray;
    	this.ref = firebaseDataService.stores;
    }

    get(storeId) {
        return this.$firebaseArray(this.ref).$getRecord(storeId);
    }

    save(store) {
        return this.StoresService.stores.$save(store);
    }

}

StoreService.$inject = ['$q',  '$firebaseArray', 'firebaseDataService', 'StoresService'];