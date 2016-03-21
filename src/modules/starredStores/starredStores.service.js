'use strict';

export default class StarredStoresService {

    constructor($firebaseArray, $q, firebaseDataService) {
        this.$firebaseArray = $firebaseArray;
        this.$q = $q;
        this.ref = firebaseDataService.starredStores;
        this.starredStores = $firebaseArray(this.ref);
    }

    get() {
        return this.$firebaseArray(this.ref);
    }


}

StarredStoresService.$inject = ['$firebaseArray', '$q', 'firebaseDataService'];