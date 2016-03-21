'use strict';

export default class MainController {

    constructor($state, $firebaseObject, LoginAPI, resolvedUser, StarredStoresService, resolvedStarredStores) {
        this.$state = $state;
        this.firebaseAuthObject = LoginAPI.firebaseAuthObject;
		this.user = resolvedUser;
		this.starredStores = resolvedStarredStores;
    }

    logout() {
        this.firebaseAuthObject.$unauth();
        this.$state.go('login');
    }

}

MainController.$inject = ['$state', '$firebaseObject', 'LoginAPI', 'resolvedUser', 'StarredStoresService', 'resolvedStarredStores'];
