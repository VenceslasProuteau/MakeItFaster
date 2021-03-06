'use strict';

export default class StoresService {

    constructor($firebaseArray, $firebaseObject, $q, firebaseDataService) {
        this.$firebaseArray = $firebaseArray;
        this.$firebaseObject = $firebaseObject;
        this.$q = $q;
        this.ref = firebaseDataService.stores;
    }

    get() {
        const deferred = this.$q.defer();

        this.$firebaseArray(this.ref)
            .$loaded()
            .then((stores) => deferred.resolve(stores))
            .catch((error) => deferred.reject(error));

        return deferred.promise;
    }

    getStore(storeId) {
        const deferred = this.$q.defer(),
            ref = this.ref.child(storeId);

        this.$firebaseObject(ref)
            .$loaded()
            .then((stores) => deferred.resolve(stores))
            .catch((error) => deferred.reject(error));

        return deferred.promise;
    }

    save(store) {
        
    }

}

StoresService.$inject = ['$firebaseArray', '$firebaseObject', '$q', 'firebaseDataService'];