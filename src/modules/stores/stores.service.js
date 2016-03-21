'use strict';

export default class StoresService {

    constructor($firebaseArray, $q, firebaseDataService) {
        this.$firebaseArray = $firebaseArray;
        this.$q = $q;
        this.ref = firebaseDataService.stores;
    }

    get() {
        return this.$firebaseArray(this.ref)
            .$loaded()
            .then((stores) => this.stores = stores);
    }

}

StoresService.$inject = ['$firebaseArray', '$q', 'firebaseDataService'];