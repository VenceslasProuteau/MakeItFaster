'use strict';

export default class ProductsService {

    constructor($firebaseArray, $firebaseObject, $q, firebaseDataService) {
        this.$firebaseArray = $firebaseArray;
        this.$firebaseObject = $firebaseObject;
        this.$q = $q;
        this.ref = firebaseDataService.products;
        this.products = $firebaseArray(this.ref);
    }

    get() {
        const deferred = this.$q.defer();

        this.$firebaseArray(this.ref)
            .$loaded()
            .then((products) => deferred.resolve(products))
            .catch((error) => deferred.reject(error));

        return deferred.promise;
    }

    getProducts(subCategoryId) {
        const deferred = this.$q.defer(),
            ref = this.ref.child(subCategoryId);

        this.$firebaseArray(ref)
            .$loaded()
            .then((products) => {
                console.log(products);
                deferred.resolve(products);
            })
            .catch((error) => deferred.reject(error));

        return deferred.promise;
    }

}

ProductsService.$inject = ['$firebaseArray', '$firebaseObject', '$q', 'firebaseDataService'];