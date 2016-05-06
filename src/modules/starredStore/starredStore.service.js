'use strict';

export default class StarredStoreService {

    constructor(StarredStoresService, StoresService) {
        this.StoresService = StoresService;
        this.StarredStoresService = StarredStoresService;
    }

    updateStarredStore(id) {
        const self = this;
        // we retrieve the selectedStore from the StoresService
        return this.StoresService.getStore(id)
            .then((store) => {
                self.exists(id) ? self.removeItem(store) : self.addItem(store);
                self.StoresService.save(store);
            })
            .catch((error) => console.log(error))

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
        console.log(selectedStore);
        selectedStore.isStarred = false;
        this.StarredStoresService.ref.child(selectedStore.$id).set(null);
    }

    exists(id) {
        // returns null if no corresponding id in starred stores
        return this.StarredStoresService.starredStores.$getRecord(id);
    }


}

StarredStoreService.$inject = ['StarredStoresService', 'StoresService'];