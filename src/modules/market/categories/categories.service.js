'use strict';

export default class CategoriesService {

    constructor($firebaseArray, $firebaseObject, $q, firebaseDataService) {
        this.$firebaseArray = $firebaseArray;
        this.$firebaseObject = $firebaseObject;
        this.$q = $q;
        this.ref = firebaseDataService.categories;
        this.categories = $firebaseArray(this.ref);
    }

    get() {
        const deferred = this.$q.defer();

        this.$firebaseArray(this.ref)
            .$loaded()
            .then((categories) => deferred.resolve(categories))
            .catch((error) => deferred.reject(error));

        return deferred.promise;
    }

    getCategories(storeId) {
        const ref = this.ref.child(storeId);
        return this.get()
            .then((categories) => {
            	let storesCategories = [];
                categories.find((category) => {
                	if (category.stores.hasOwnProperty(storeId)) {
                		storesCategories.push(category);
                	}
                });
                return storesCategories;
            });
    }

    getSubCategories(catId) {
        const ref = this.ref.child(catId).child('subcategories');
        const deferred = this.$q.defer();

        this.$firebaseArray(ref)
            .$loaded()
            .then((subcategories) => deferred.resolve(subcategories))
            .catch((error) => deferred.reject(error));

        return deferred.promise;
    }

}

CategoriesService.$inject = ['$firebaseArray', '$firebaseObject', '$q', 'firebaseDataService'];