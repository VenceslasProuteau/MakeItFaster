'use strict';

export default class StarredStoreService {

    constructor(StarredStoresService, StoreService) {
        this.StoreService = StoreService;
        this.StarredStoresService = StarredStoresService;
    }

    updateStarredStore(id) {
        // we retrieve the selectedStore from the StoreService
        const selectedStore = this.StoreService.get(id);

        // if the item exists we remove it, if not, we add it
        this.exists(id) ? this.removeItem(selectedStore) : this.addItem(selectedStore);

        // we then save it
        this.StoreService.save(selectedStore);
    }

    addItem(selectedStore) {
        // to keep good db structuring datas we update it in the stores array,
        // and in the starred array
        selectedStore.isStarred = true;
        this.StarredStoresService.ref.child(selectedStore.$id).set(true);
    }

    removeItem(selectedStore) {
        // to keep good db structuring datas we update it in the stores array,
        // and in the starred array
        selectedStore.isStarred = false;
        this.StarredStoresService.ref.child(selectedStore.$id).set(null);
    }

    exists(id) {
        // returns null if no corresponding id in starred stores
        return this.StarredStoresService.starredStores.$getRecord(id);
    }


}

StarredStoreService.$inject = ['StarredStoresService', 'StoreService'];