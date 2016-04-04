'use strict';

export default class StoreController {

    constructor(resolvedStore) {
        this.store = resolvedStore;
    }

}

StoreController.$inject = ['resolvedStore'];
