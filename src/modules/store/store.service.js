'use strict';

export default class StoreService {

    constructor(StoresService) {
        this.StoresService = StoresService;
    }

    get(storeId) {
        return this.StoresService.stores.$getRecord(storeId);
    }

    save(store) {
        return this.StoresService.stores.$save(store);
    }

}

StoreService.$inject = ['StoresService'];