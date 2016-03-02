'use strict';

export default class HeaderController {

    constructor(UserService, $state) {
        this.UserService = UserService;
        this.user = this.UserService.$getAuth();
        this.$state = $state;
    }

    logout() {
    	this.UserService.$unauth();
    	this.$state.go('login');
    }
}

HeaderController.$inject = ['UserService', '$state'];
