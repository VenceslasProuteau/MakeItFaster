'use strict';

export default class MarkersService {
	constructor($firebaseArray, $q, firebaseDataService) {
        this.$firebaseArray = $firebaseArray;
        this.$q = $q;
        this.ref = firebaseDataService.markers;
    }

    get() {
        return this.$firebaseArray(this.ref)
            .$loaded()
            .then((markers) => this.markers = markers);
    }
}

MarkersService.$inject = ['$firebaseArray', '$q', 'firebaseDataService'];