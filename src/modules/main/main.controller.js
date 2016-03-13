'use strict';

export default class MainController {

    constructor($state, $firebaseObject, UserService, resolvedUser) {
        this.$state = $state;

        this.UserService = UserService;
		this.user = resolvedUser;
    }

    logout() {
        this.UserService.auth.$unauth();
        this.$state.go('login');
    }

}

MainController.$inject = ['$state', '$firebaseObject', 'UserService', 'resolvedUser'];
