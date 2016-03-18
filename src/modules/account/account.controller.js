'use strict';

export default class AccountController {

    constructor(UserService, resolvedUser) {
    	this.UserService = UserService;
    	this.initUser();
    }

    initUser() {
    	this.user = Object.assign({}, this.UserService.user);
    }

    save() {
    	this.UserService.save(this.user);
    }

    cancel() {
    	this.initUser();
        this.formAccount.$setPristine();
    }

}

AccountController.$inject = ['UserService'];