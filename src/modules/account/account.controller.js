'use strict';

export default class AccountController {

    constructor(UserService, SpinnerAPI, toaster) {
    	this.UserService = UserService;
        this.SpinnerAPI = SpinnerAPI;
        this.toaster = toaster;

    	this.initUser();
    }

    initUser() {
        // we work on a copy of the stored user
    	this.user = Object.assign({}, this.UserService.user);
    }

    save() {
        this.SpinnerAPI.show();
    	this.UserService.save(this.user)
            .then(() => {
                this.toaster.pop('success', 'Modifications bien enregistrées');
                this.formAccount.$setPristine();
            })
            .catch((error) => this.toaster.pop('error', 'Problèeme lors de la sauvegarde de vos modifications'))
            .finally(() => this.SpinnerAPI.hide());
    }

    cancel() {
    	this.initUser();
    }

}

AccountController.$inject = ['UserService', 'SpinnerAPI', 'toaster'];