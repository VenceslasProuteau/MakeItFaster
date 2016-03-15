'use strict';

export default class MainController {

    constructor($state, $firebaseObject, UserService, LoginAPI, resolvedUser) {
        this.$state = $state;
        this.firebaseAuthObject = LoginAPI.firebaseAuthObject;
        this.UserService = UserService;
		this.user = resolvedUser;
    }

    logout() {
        this.firebaseAuthObject.$unauth();
        this.$state.go('login');
    }

}

MainController.$inject = ['$state', '$firebaseObject', 'UserService', 'LoginAPI', 'resolvedUser'];
