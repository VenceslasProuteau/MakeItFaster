'use strict';

export default class AccountController {

    constructor(UserService) {
    	this.UserService = UserService;
    	this.initUser();
    }

    initUser() {
    	this.user = angular.copy(this.UserService.user);
    }

    save() {
    	this.UserService.save(this.user);
    }

    cancel() {
    	this.initUser();
    }

}

AccountController.$inject = ['UserService'];