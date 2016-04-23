'use strict';

export default class SubCategoriesService {

    constructor($firebaseArray, $q, firebaseDataService) {
        this.$firebaseArray = $firebaseArray;
        this.$q = $q;
        this.ref = firebaseDataService.subcategories;
        this.subcategories = $firebaseArray(this.ref);
    }

    get() {
        const deferred = this.$q.defer();

        this.$firebaseArray(this.ref)
            .$loaded()
            .then((subcategories) => deferred.resolve(subcategories))
            .catch((error) => deferred.reject(error));

        return deferred.promise;
    }

}

SubCategoriesService.$inject = ['$firebaseArray', '$q', 'firebaseDataService'];