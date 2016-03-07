'use strict';

export default class HeaderController {

    constructor(UserService, $state) {
        this.UserService = UserService;
        this.user = this.UserService.auth.$getAuth();
        this.$state = $state;
    }

    logout() {
    	this.UserService.auth.$unauth();
    	this.$state.go('login');
    }
}

HeaderController.$inject = ['UserService', '$state'];
